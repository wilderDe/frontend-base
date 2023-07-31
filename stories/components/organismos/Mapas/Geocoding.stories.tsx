import { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
  calcularZoom,
  getCentro,
} from '../../../../common/components/ui/mapas/GeoUtils'
import { Meta, StoryFn } from '@storybook/react'
import Mapa from '../../../../common/components/ui/mapas/Mapa'
import {
  FormInputAutocomplete,
  optionType,
} from '../../../../common/components/ui/form/FormInputAutocomplete'
import { useForm } from 'react-hook-form'
import { useAlerts } from '../../../../common/hooks'
import { useDebouncedCallback } from 'use-debounce'
import { Servicios } from '../../../../common/services'
import { Constantes } from '../../../../config'
import { imprimir } from '../../../../common/utils/imprimir'
import { InterpreteMensajes } from '../../../../common/utils'

interface AddressLeaflet {
  city: string
  county: string
  state: string
  country: string
  country_code: string
  tourism: string
  road: string
  village?: string
  neighbourhood: string
  city_district: string
  postcode: string
}

interface LeafletUbicacionType {
  place_id: string
  licence?: string
  osm_type?: string
  osm_id?: number
  boundingbox?: string[]
  lat: string
  lon: string
  display_name: string
  class?: string
  type?: string
  importance?: number
  icon?: string
  address?: AddressLeaflet
}

interface SearchType {
  zona: optionType
}

export default {
  title: 'Organismos/Mapas/Mapa con API de OSM',
  component: Mapa,
  argTypes: {},
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    docs: {
      description: {
        component:
          'Ejemplo de componente Mapa que utiliza la API de OpenStreetMaps para buscar y mostrar una ubicación de referencia en un mapa Leaflet. El componente incluye un campo de búsqueda de ubicación, permite agregar puntos de referencia haciendo clic en el mapa y utiliza varios paquetes y servicios de terceros para su implementación. También proporciona una opción para imprimir mensajes de alerta en caso de errores.',
      },
    },
  },
} as Meta

const Template: StoryFn<typeof Mapa> = (args) => {
  const [zoom, setZoom] = useState<number | undefined>()
  const [centro, setCentro] = useState<number[] | undefined>()
  const [puntos, setPuntos] = useState<Array<string[]>>([])

  const agregarPunto = (latlng: number[]) => {
    const puntosActuales = []
    puntosActuales.push([latlng[0].toString(), latlng[1].toString()])
    setPuntos([...puntosActuales])
  }

  useEffect(
    () => {
      if (args.puntos) {
        setPuntos([...args.puntos])
        const zoom: number = calcularZoom([...args.puntos])
        setZoom(zoom)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    setCentro(getCentro(puntos))
  }, [puntos])

  /*
  -------------------- buscador de MAPA ------------------
  */

  const { control, watch } = useForm<SearchType>({
    defaultValues: {},
  })

  const watchZona = watch('zona')

  const defaultOption = { key: '', value: '', label: '' }

  const [loadingAutoComplete, setLoadingAutoComplete] = useState<boolean>(false)
  const { Alerta } = useAlerts()
  const [defaultCategoriaOption, setDefaultCategoriaOption] =
    useState<optionType>(defaultOption)

  const [puntosMapaLeaflet, setPuntoMapaLeafletData] = useState<
    LeafletUbicacionType[]
  >([])

  const debounced = useDebouncedCallback(async (direccion: string) => {
    await obtenerUbicacionMapa(direccion)
  }, 1000)

  const actualizacionDireccion = (direccion: string) => {
    debounced(direccion)
  }

  const obtenerUbicacionMapa = async (
    direccion?: string,
    updateMapa: boolean = true
  ) => {
    try {
      setLoadingAutoComplete(true)
      let referencia = `Bolivia`
      if (direccion) referencia = `${referencia};${direccion}`

      const respuesta = await Servicios.peticionHTTP({
        url: `${Constantes.apiOpenStreetMap}/search/${referencia}`,
        params: {
          format: 'json',
          addressdetails: '1',
          limit: '10',
        },
        headers: {
          'Accept-Language': 'es',
        },
        withCredentials: false,
      })
      if (updateMapa) setPuntoMapaLeafletData(respuesta.data)
    } catch (e) {
      imprimir(`Error al obtener puntos mapa: ${e}`)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingAutoComplete(false)
    }
  }

  const actualizarUbicacion = (select: optionType) => {
    try {
      const ubicacion: LeafletUbicacionType = JSON.parse(
        select.value != undefined ? select.value + '' : ''
      )
      const current = puntosMapaLeaflet.find((punto) =>
        `${select.key}`.includes(punto.place_id.toString())
      )
      if (current) {
        setDefaultCategoriaOption({
          key: `${current.place_id.toString()}`,
          value: current.display_name,
          label: `${current.display_name}`,
        })
      }
      setCentro([Number(ubicacion.lat), Number(ubicacion.lon)])
      setZoom(15)
    } catch (e) {
      imprimir('Error al actualizar ubicación', e)
    }
  }

  useEffect(
    () => {
      imprimir(typeof watchZona, watchZona)
      if (watchZona) {
        actualizarUbicacion(watchZona)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [watchZona]
  )

  /*
  -------------------- buscador de MAPA ------------------
  */

  return (
    <>
      <Grid container direction={'column'}>
        <Grid item>
          <FormInputAutocomplete
            id={'zona'}
            control={control}
            name={'zona'}
            label="Buscar zona de referencia"
            disabled={false}
            loading={loadingAutoComplete}
            options={puntosMapaLeaflet.map((punto) => ({
              key: `${punto.place_id.toString()}`,
              value: JSON.stringify(punto),
              label: `${punto.display_name}`,
            }))}
            onInputChange={(event, value) => {
              actualizacionDireccion(value)
            }}
          />
        </Grid>
        <Box height={10} />
        <Grid item>
          <Mapa
            id={'geocoding-mapa'}
            key={'geocoding-mapa'}
            zoom={zoom}
            puntos={puntos}
            centro={centro}
            draggable
            onClick={agregarPunto}
            onDrag={agregarPunto}
          />
        </Grid>
        <Typography>{defaultCategoriaOption.value}</Typography>
      </Grid>
    </>
  )
}

export const PorDefecto = Template.bind({})
PorDefecto.storyName = 'Por defecto'
PorDefecto.args = {
  puntos: [],
  readonly: false,
}
