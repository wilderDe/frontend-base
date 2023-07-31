import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormInputDropdown,
  FormInputText,
} from '../../../../common/components/ui/form'
import ProgresoLineal from '../../../../common/components/ui/progreso/ProgresoLineal'
import { useAlerts, useSession } from '../../../../common/hooks'
import { InterpreteMensajes } from '../../../../common/utils'
import { imprimir } from '../../../../common/utils/imprimir'
import { Constantes } from '../../../../config'
import { ModalModuloType } from '../types/ModalModuloType'
import {
  CrearEditarModulosType,
  GuardarModulosType,
} from '../types/CrearEditarModulosType'

export const VistaModalModulo = ({
  modulo,
  accionCorrecta,
  accionCancelar,
  modulos,
}: ModalModuloType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()

  // Proveedor de la sesión
  const { sesionPeticion } = useSession()

  const { handleSubmit, control, watch } = useForm<CrearEditarModulosType>({
    defaultValues: {
      id: modulo?.id,
      label: modulo?.label,
      url: modulo?.url,
      nombre: modulo?.nombre,
      propiedades: modulo?.propiedades,
      estado: modulo?.estado,
      idModulo: modulo?.modulo?.id,
      esSeccion: modulo?.esSeccion,
    },
  })

  const checked = watch('esSeccion')

  const guardarActualizarModulo = async (data: CrearEditarModulosType) => {
    await guardarActualizarModuloPeticion({
      idModulo: data.idModulo,
      label: data.label,
      url: data.url,
      estado: data.estado,
      nombre: data.nombre,
      id: data.id,
      propiedades: data.propiedades,
    })
  }

  const guardarActualizarModuloPeticion = async (
    modulo: GuardarModulosType
  ) => {
    try {
      setLoadingModal(true)
      //await delay(1000)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/autorizacion/modulos${
          modulo.id ? `/${modulo.id}` : ''
        }`,
        tipo: !!modulo.id ? 'patch' : 'post',
        body: {
          ...modulo,
          propiedades: {
            ...modulo.propiedades,
            ...{ orden: Number(modulo.propiedades.orden) },
          },
        },
      })
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      accionCorrecta()
    } catch (e) {
      imprimir(`Error al crear o actualizar módulo`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(guardarActualizarModulo)}>
      <DialogContent dividers>
        <Grid container direction={'column'} justifyContent="space-evenly">
          {checked ? (
            <></>
          ) : (
            <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
              <Grid item xs={12} sm={12} md={6}>
                <FormInputDropdown
                  id={'idModulo'}
                  name="idModulo"
                  control={control}
                  label="Sección"
                  disabled={loadingModal}
                  options={modulos.map((lm) => ({
                    key: lm.id,
                    value: lm.id,
                    label: lm.label,
                  }))}
                  onChange={(event) => {
                    imprimir(event.target.value)
                    //setValue('accion', [])
                  }}
                  rules={{ required: 'Este campo es requerido' }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormInputText
                  id={'icono'}
                  control={control}
                  name="propiedades.icono"
                  label="Icono"
                  disabled={loadingModal || checked}
                  rules={
                    !checked ? { required: 'Este campo es requerido' } : {}
                  }
                />
              </Grid>
            </Grid>
          )}
          <Box height={'15px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'nombre'}
                control={control}
                name="nombre"
                label="Nombre"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'label'}
                control={control}
                name="label"
                label="Label"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
          </Grid>
          <Box height={'15px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'url'}
                control={control}
                name="url"
                label="URL"
                disabled={loadingModal}
                rules={{
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'orden'}
                control={control}
                type={'number'}
                inputProps={{ type: 'number' }}
                name="propiedades.orden"
                label="Orden"
                disabled={loadingModal}
                rules={{
                  required: 'Este campo es requerido',
                }}
              />
            </Grid>
          </Grid>
          <Box height={'15px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Box height={'20px'} />
            <Grid item xs={12} sm={12} md={12}>
              <FormInputText
                id={'descripcion'}
                control={control}
                name="propiedades.descripcion"
                label="Descripción"
                multiline
                rows={2}
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
                onChange={(event) => {
                  const value = event.target.value
                  return Number(value)
                }}
              />
            </Grid>
          </Grid>
          <Box height={'20px'} />
          <ProgresoLineal mostrar={loadingModal} />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          my: 1,
          mx: 2,
          justifyContent: {
            lg: 'flex-end',
            md: 'flex-end',
            xs: 'center',
            sm: 'center',
          },
        }}
      >
        <Button
          variant={'outlined'}
          disabled={loadingModal}
          onClick={accionCancelar}
        >
          Cancelar
        </Button>
        <Button variant={'contained'} disabled={loadingModal} type={'submit'}>
          Guardar
        </Button>
      </DialogActions>
    </form>
  )
}
