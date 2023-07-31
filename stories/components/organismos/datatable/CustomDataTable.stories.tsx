import { Meta, StoryFn } from '@storybook/react'
import { CustomDataTable, IconoTooltip } from '../../../../common/components/ui'
import { Box, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { ColumnaType } from '../../../../common/types'
import React, { ReactNode, useEffect, useState } from 'react'
import { Paginacion } from '../../../../common/components/ui/datatable/Paginacion'
import {
  CriterioOrdenType,
  OrdenEnum,
} from '../../../../common/types/ordenTypes'
import { BotonBuscar } from '../../../../common/components/ui/botones/BotonBuscar'
import { BotonAcciones } from '../../../../common/components/ui/botones/BotonAcciones'

export default {
  title: 'Organismos/Datatable/CustomDataTable',
  component: CustomDataTable,
  parameters: {
    docs: {
      description: {
        component:
          'El componente `CustomDataTable` es tabla de datos personalizada que acepta varias propiedades (props), como la definición de las columnas, el contenido de la tabla, la paginación, los filtros y las acciones, entre otras',
      },
    },
  },
} as Meta<typeof CustomDataTable>

// const eventsFromNames = actions('accion')

// replica del componente
const Template: StoryFn<typeof CustomDataTable> = (args) => (
  <CustomDataTable {...args} />
)

/// Columnas para data table
const columnas: Array<ColumnaType> = [
  { campo: 'nombre', nombre: 'Nombre' },
  { campo: 'resumen', nombre: 'Resumen' },
  { campo: 'fechaPublicacion', nombre: 'Fecha Publicación' },
  { campo: 'acciones', nombre: 'Eventos' },
]
const solicitudesData = [
  {
    id: '1',
    nombre: 'Cien años de soledad',
    resumen:
      'Una novela de realismo mágico que cuenta la historia de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo.',
    fechaPublicacion: '1967-05-30',
  },
  {
    id: '2',
    nombre: '1984',
    resumen:
      'Una novela distópica que presenta una sociedad totalitaria y vigilante en la que el gobierno controla cada aspecto de la vida de sus ciudadanos.',
    fechaPublicacion: '1949-06-08',
  },
  {
    id: '3',
    nombre: 'El señor de los anillos',
    resumen:
      'Una épica trilogía de fantasía que sigue las aventuras de hobbits, elfos, magos y guerreros en su búsqueda para destruir el anillo del poder y derrotar al malvado Sauron.',
    fechaPublicacion: '1954-07-29',
  },
  {
    id: '4',
    nombre: 'Matar a un ruiseñor',
    resumen:
      'Una novela clásica de la literatura estadounidense que aborda temas de racismo y justicia a través de la historia de un abogado que defiende a un hombre negro injustamente acusado de un delito.',
    fechaPublicacion: '1960-07-11',
  },
  {
    id: '5',
    nombre: 'Harry Potter y la piedra filosofal',
    resumen:
      'El primer libro de la serie de fantasía juvenil que sigue las aventuras de un joven mago llamado Harry Potter mientras asiste a la escuela de magia y hechicería de Hogwarts.',
    fechaPublicacion: '1997-06-26',
  },
]

const contenidoTabla: Array<Array<ReactNode>> = solicitudesData.map(
  (solicitudData, index) => [
    <Typography key={`${solicitudData.id}-${index}-nombre`} variant={'body2'}>
      {`${solicitudData.nombre}`}
    </Typography>,

    <Typography key={`${solicitudData.id}-${index}-resumen`} variant={'body2'}>
      {`${solicitudData.resumen}`}
    </Typography>,

    <Typography
      key={`${solicitudData.id}-${index}-fechaEntrega`}
      variant={'body2'}
    >
      {solicitudData.fechaPublicacion}
    </Typography>,

    <Grid key={`${solicitudData.id}-${index}-acciones`}>
      <>
        <IconoTooltip
          id={'editarLibro'}
          titulo={'Editar libro'}
          color={'success'}
          accion={() => {}}
          icono={'edit'}
          name={'Editar libro'}
        />
        <IconoTooltip
          id={'verLibro'}
          titulo={'Ver libro'}
          color={'info'}
          accion={() => {}}
          icono={'visibility'}
          name={'Ver libro'}
        />
        <IconoTooltip
          id={'eliminarLibro'}
          titulo={'Eliminar libro'}
          color={'warning'}
          accion={() => {}}
          icono={'delete'}
          name={'Eliminar libro'}
        />
      </>
    </Grid>,
  ]
)
export const Columnas = Template.bind({})

Columnas.args = {
  titulo: 'Tabla Libros',
  error: false,
  acciones: [],
  columnas: columnas,
  contenidoTabla: contenidoTabla,
}

/* const acciones: Array<ReactNode> = [
  <IconoTooltip
    id={'buscarProyecto'}
    titulo={'Buscar proyecto'}
    key={`BuscarProyecto`}
    accion={() => {}}
    icono={'search'}
    name={'buscarProyecto'}
  />,
  <IconoTooltip
    id={'actualizarProyecto'}
    titulo={'Actualizar proyecto'}
    key={`accionActualizarProyecto`}
    accion={() => {}}
    icono={'refresh'}
    name={'actualizarProyecto'}
  />,
  <IconoTooltip
    id={'agregarProyecto'}
    titulo={'Agregar proyecto'}
    key={`accionAgregarProyecto`}
    accion={() => {}}
    icono={'add_circle_outline'}
    name={'agregarProyecto'}
  />,
] */
const Template3: StoryFn<typeof CustomDataTable> = (args) => {
  const [mostrarFiltroRol, setMostrarFiltroRol] = useState(false)
  const acciones: Array<ReactNode> = [
    <BotonBuscar
      id={'accionFiltrarRolToggle'}
      key={'accionFiltrarRolToggle'}
      seleccionado={mostrarFiltroRol}
      cambiar={setMostrarFiltroRol}
    />,
    <IconoTooltip
      id={'actualizarProyecto'}
      titulo={'Actualizar proyecto'}
      key={`accionActualizarProyecto`}
      accion={() => {}}
      icono={'refresh'}
      name={'actualizarProyecto'}
    />,
    <IconoTooltip
      id={'agregarProyecto'}
      titulo={'Agregar proyecto'}
      key={`accionAgregarProyecto`}
      accion={() => {}}
      icono={'add_circle_outline'}
      name={'agregarProyecto'}
    />,
    <BotonAcciones
      id={'agregarModuloSeccion'}
      key={'agregarModuloSeccion'}
      icono={'more_vert'}
      texto={'Agregar'}
      variante={'icono'}
      label={'Agregar libros'}
      acciones={[
        {
          id: 'agregarLibros',
          mostrar: true,
          titulo: 'Importar libro',
          accion: async () => {},
          desactivado: false,
          icono: 'import_contacts',
          name: 'Importar libro',
        },
        {
          id: '1',
          mostrar: true,
          titulo: 'Denunciar',
          accion: async () => {},
          desactivado: false,
          icono: 'flag',
          name: 'denunciar',
        },
      ]}
    />,
  ]
  const Filtro = () => {
    return (
      <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
        <InputLabel>
          <Typography sx={{ color: 'text.primary' }}>{`Buscar`}</Typography>
          <TextField sx={{ bgcolor: 'background.paper' }}></TextField>
        </InputLabel>
      </Box>
    )
  }
  args.acciones = acciones
  args.filtros = mostrarFiltroRol && <Filtro />

  return <CustomDataTable {...args} />
}
export const Acciones = Template3.bind({})

Acciones.args = {
  ...Columnas.args,
}
/// Variable con parámetros de paginación
const paginacion = (
  <Paginacion
    pagina={1}
    limite={20}
    total={500}
    cambioPagina={() => {}}
    cambioLimite={() => {}}
  />
)

export const SB_PAGINACION = Template3.bind({})
SB_PAGINACION.storyName = 'Paginación'
SB_PAGINACION.args = {
  ...Columnas.args,
  paginacion: paginacion,
}

export const Cargando = Template3.bind({})
Cargando.storyName = 'Tabla cargando'
Cargando.args = {
  ...Columnas.args,
  cargando: true,
}

const Template1: StoryFn<typeof CustomDataTable> = (args) => {
  const [datos, setDatos] = useState<any[]>([
    {
      nombre: 'Toy Story',
      resumen:
        'Un vaquero de juguete llamado Woody es el favorito de su dueño Andy, pero su posición se ve amenazada cuando llega un nuevo juguete, Buzz Lightyear.',
      fechaPublicacion: '1995',
    },
    {
      nombre: 'Buscando a Nemo',
      resumen:
        'Un pez payaso joven llamado Nemo es capturado y llevado a un acuario en Sydney. Su padre Marlin y Dory, un pez cirujano con problemas de memoria, se embarcan en una aventura para rescatarlo.',
      fechaPublicacion: '2003',
    },
    {
      nombre: 'Los Increíbles',
      resumen:
        'Una familia de superhéroes retirados se ve obligada a volver a la acción para salvar al mundo de un villano malvado.',
      fechaPublicacion: '2004',
    },
    {
      nombre: 'Up',
      resumen:
        'Un viudo llamado Carl Fredricksen se embarca en una aventura en su casa voladora para cumplir el sueño de su difunta esposa de viajar a Sudamérica.',
      fechaPublicacion: '2009',
    },
    {
      nombre: 'Inside Out',
      resumen:
        'La película sigue alas emociones de una niña llamada Riley mientras atraviesa un momento difícil en su vida y debe lidiar con el cambio y la adaptación a una nueva ciudad.',
      fechaPublicacion: '2015',
    },
  ])

  const [ordenCriterios, setOrdenCriterios] = useState<
    Array<CriterioOrdenType>
  >([
    { campo: 'nombre', nombre: 'Nombre', ordenar: true, orden: OrdenEnum.DESC },
    { campo: 'resumen', nombre: 'Resumen', ordenar: true },
    {
      campo: 'fechaPublicacion',
      nombre: 'Fecha Publicación',
      ordenar: true,
    },
    { campo: 'acciones', nombre: 'Eventos' },
  ])
  const contenidoTabla: Array<Array<ReactNode>> = datos.map(
    (solicitudData, index) => [
      <Typography key={`${solicitudData.id}-${index}-nombre`} variant={'body2'}>
        {`${solicitudData.nombre}`}
      </Typography>,

      <Typography
        key={`${solicitudData.id}-${index}-resumen`}
        variant={'body2'}
      >
        {`${solicitudData.resumen}`}
      </Typography>,

      <Typography
        key={`${solicitudData.id}-${index}-fechaEntrega`}
        variant={'body2'}
      >
        {solicitudData.fechaPublicacion}
      </Typography>,

      <Grid key={`${solicitudData.id}-${index}-acciones`}>
        <>
          <IconoTooltip
            id={'editarLibro'}
            titulo={'Editar libro'}
            color={'success'}
            accion={() => {}}
            icono={'edit'}
            name={'Editar libro'}
          />
          <IconoTooltip
            id={'verLibro'}
            titulo={'Ver libro'}
            color={'info'}
            accion={() => {}}
            icono={'visibility'}
            name={'Ver libro'}
          />
          <IconoTooltip
            id={'eliminarLibro'}
            titulo={'Eliminar libro'}
            color={'warning'}
            accion={() => {}}
            icono={'delete'}
            name={'Eliminar libro'}
          />
        </>
      </Grid>,
    ]
  )
  args.columnas = ordenCriterios
  args.contenidoTabla = contenidoTabla
  args.cambioOrdenCriterios = setOrdenCriterios
  useEffect(() => {
    const result = ordenCriterios.filter((order) => order.orden !== undefined)
    //console.log(result)
    if (result != undefined && result.length > 0) {
      const campo = result[0].campo
      const f = datos.sort((x, y) => {
        const r = x[campo].localeCompare(y[campo])
        return result[0].orden === OrdenEnum.DESC ? -r : r
      })
      setDatos(f)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordenCriterios])
  return <CustomDataTable {...args} />
}

export const HeadFiltro = Template1.bind({})
HeadFiltro.storyName = 'Orden por columna'
HeadFiltro.args = {
  titulo: 'Tabla Libros',
  error: false,
  cargando: false,
}

const Template2: StoryFn<typeof CustomDataTable> = (args) => {
  const [datos, setDatos] = useState<any[]>([
    {
      nombre: 'Toy Story',
      resumen:
        'Un vaquero de juguete llamado Woody es el favorito de su dueño Andy, pero su posición se ve amenazada cuando llega un nuevo juguete, Buzz Lightyear.',
      fechaPublicacion: '1995',
    },
    {
      nombre: 'Buscando a Nemo',
      resumen:
        'Un pez payaso joven llamado Nemo es capturado y llevado a un acuario en Sydney. Su padre Marlin y Dory, un pez cirujano con problemas de memoria, se embarcan en una aventura para rescatarlo.',
      fechaPublicacion: '2003',
    },
    {
      nombre: 'Los Increíbles',
      resumen:
        'Una familia de superhéroes retirados se ve obligada a volver a la acción para salvar al mundo de un villano malvado.',
      fechaPublicacion: '2004',
    },
    {
      nombre: 'Up',
      resumen:
        'Un viudo llamado Carl Fredricksen se embarca en una aventura en su casa voladora para cumplir el sueño de su difunta esposa de viajar a Sudamérica.',
      fechaPublicacion: '2009',
    },
    {
      nombre: 'Inside Out',
      resumen:
        'La película sigue alas emociones de una niña llamada Riley mientras atraviesa un momento difícil en su vida y debe lidiar con el cambio y la adaptación a una nueva ciudad.',
      fechaPublicacion: '2015',
    },
  ])

  const [datosSeleccionado, setDatosSeleccionado] = useState<any>([])

  const acciones: Array<ReactNode> = [
    <IconoTooltip
      id={'buscarProyecto'}
      titulo={'Buscar proyecto'}
      key={`BuscarProyecto`}
      accion={() => {}}
      icono={'search'}
      name={'buscarProyecto'}
    />,
    <IconoTooltip
      id={'actualizarProyecto'}
      titulo={'Actualizar proyecto'}
      key={`accionActualizarProyecto`}
      accion={() => {}}
      icono={'refresh'}
      name={'actualizarProyecto'}
    />,
    <IconoTooltip
      id={'agregarProyecto'}
      titulo={'Agregar proyecto'}
      key={`accionAgregarProyecto`}
      accion={() => {}}
      icono={'add_circle_outline'}
      name={'agregarProyecto'}
    />,
  ]

  const accionesMultiples: Array<ReactNode> = [
    <IconoTooltip
      id={'imprimir'}
      titulo={'Obtener reporte'}
      key={`imprimir`}
      accion={() => {}}
      icono={'print'}
      name={'imprimir'}
    />,
    <IconoTooltip
      id={'actualizarProyecto'}
      titulo={'Actualizar'}
      key={`accionActualizarProyecto`}
      accion={() => {}}
      icono={'refresh'}
      name={'actualizarProyecto'}
    />,
  ]

  const [ordenCriterios, setOrdenCriterios] = useState<
    Array<CriterioOrdenType>
  >([
    { campo: 'nombre', nombre: 'Nombre', ordenar: true, orden: OrdenEnum.DESC },
    { campo: 'resumen', nombre: 'Resumen', ordenar: true },
    {
      campo: 'fechaPublicacion',
      nombre: 'Fecha Publicación',
      ordenar: true,
    },
    { campo: 'acciones', nombre: 'Eventos' },
  ])
  const contenidoTabla: Array<Array<ReactNode>> = datos.map(
    (solicitudData, index) => [
      <Typography key={`${solicitudData.id}-${index}-nombre`} variant={'body2'}>
        {`${solicitudData.nombre}`}
      </Typography>,

      <Typography
        key={`${solicitudData.id}-${index}-resumen`}
        variant={'body2'}
      >
        {`${solicitudData.resumen}`}
      </Typography>,

      <Typography
        key={`${solicitudData.id}-${index}-fechaEntrega`}
        variant={'body2'}
      >
        {solicitudData.fechaPublicacion}
      </Typography>,

      <Grid key={`${solicitudData.id}-${index}-acciones`}>
        <>
          <IconoTooltip
            id={'editarLibro'}
            titulo={'Editar libro'}
            color={'success'}
            accion={() => {}}
            icono={'edit'}
            name={'Editar libro'}
          />
          <IconoTooltip
            id={'verLibro'}
            titulo={'Ver libro'}
            color={'info'}
            accion={() => {}}
            icono={'visibility'}
            name={'Ver libro'}
          />
          <IconoTooltip
            id={'eliminarLibro'}
            titulo={'Eliminar libro'}
            color={'warning'}
            accion={() => {}}
            icono={'delete'}
            name={'Eliminar libro'}
          />
        </>
      </Grid>,
    ]
  )
  args.acciones = datosSeleccionado.length == 0 ? acciones : accionesMultiples
  args.columnas = ordenCriterios
  args.seleccionable = true
  args.seleccionados = (indices) => {
    setDatosSeleccionado(
      datos.filter((value, index) => indices.includes(index))
    )
  }
  args.contenidoTabla = contenidoTabla
  args.cambioOrdenCriterios = setOrdenCriterios
  useEffect(() => {
    const result = ordenCriterios.filter((order) => order.orden !== undefined)
    //console.log(result)
    if (result != undefined && result.length > 0) {
      const campo = result[0].campo
      const f = datos.sort((x, y) => {
        const r = x[campo].localeCompare(y[campo])
        return result[0].orden === OrdenEnum.DESC ? -r : r
      })
      setDatos(f)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordenCriterios])
  return <CustomDataTable {...args} />
}

export const MultiSelector = Template2.bind({})
MultiSelector.storyName = 'Selector de filas'
MultiSelector.args = {
  titulo: 'Tabla Libros',
  error: false,
  cargando: false,
}
///Filtros
const Template4: StoryFn<typeof CustomDataTable> = (args) => {
  const [mostrarFiltroRol, setMostrarFiltroRol] = useState(true)
  const acciones: Array<ReactNode> = [
    <BotonBuscar
      id={'accionFiltrarRolToggle'}
      key={'accionFiltrarRolToggle'}
      seleccionado={mostrarFiltroRol}
      cambiar={setMostrarFiltroRol}
    />,

    <IconoTooltip
      id={'actualizarProyecto'}
      titulo={'Actualizar proyecto'}
      key={`accionActualizarProyecto`}
      accion={() => {}}
      icono={'refresh'}
      name={'actualizarProyecto'}
    />,
    <IconoTooltip
      id={'agregarProyecto'}
      titulo={'Agregar proyecto'}
      key={`accionAgregarProyecto`}
      accion={() => {}}
      icono={'add_circle_outline'}
      name={'agregarProyecto'}
    />,
  ]
  const Filtro = () => {
    return (
      <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
        <InputLabel>
          <Typography sx={{ color: 'text.primary' }}>{`Buscar`}</Typography>
          <TextField sx={{ bgcolor: 'background.paper' }}></TextField>
        </InputLabel>
      </Box>
    )
  }
  args.acciones = acciones
  args.filtros = mostrarFiltroRol && <Filtro />

  return <CustomDataTable {...args} />
}
export const Filtros = Template4.bind({})

Filtros.args = {
  ...Columnas.args,
}
