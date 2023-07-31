import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { delay, InterpreteMensajes } from '../../../../common/utils'
import { Constantes } from '../../../../config'

import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import { FormInputText } from '../../../../common/components/ui/form'
import ProgresoLineal from '../../../../common/components/ui/progreso/ProgresoLineal'
import { useAlerts, useSession } from '../../../../common/hooks'
import { imprimir } from '../../../../common/utils/imprimir'

import { CrearEditarProductoCRUDType, ProductoCRUDType } from '../types/productosCRUDTypes'

export interface ModalProductoType {
  producto?: ProductoCRUDType | null
  accionCorrecta: () => void
  accionCancelar: () => void
}

export const VistaModalProducto = ({
  producto,
  accionCorrecta,
  accionCancelar,
}: ModalProductoType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()

  // Proveedor de la sesión
  const { sesionPeticion } = useSession()

  const { handleSubmit, control } = useForm<CrearEditarProductoCRUDType>({
    defaultValues: {
      id: producto?.id,
      nombre: producto?.nombre,
      cantidad: producto?.cantidad,
      precio: producto?.precio
    }
    ,
  })

  const guardarActualizarProducto = async (
    data: CrearEditarProductoCRUDType
  ) => {
    await guardarActualizarProductosPeticion(data)
  }

  const guardarActualizarProductosPeticion = async (
    producto: CrearEditarProductoCRUDType
  ) => {
    try {
      setLoadingModal(true)
      await delay(1000)
      producto.cantidad = Number(producto.cantidad);
      producto.precio =  Number(producto.precio)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/productos${
          producto.id ? `/${producto.id}` : ''
        }`,
        tipo: !!producto.id ? 'patch' : 'post',
        body: producto,
      })
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      accionCorrecta()
    } catch (e) {
      imprimir(`Error al crear o actualizar producto`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(guardarActualizarProducto)}>
      <DialogContent dividers>
        <Grid container direction={'column'} justifyContent="space-evenly">
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
          </Grid>
          <Box height={'15px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'cantidad'}
                control={control}
                name="cantidad"
                label="Cantidad"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'precio'}
                control={control}
                name="precio"
                label="Precio"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
          </Grid>
          <Box height={'10px'} />
          <ProgresoLineal mostrar={loadingModal} />
          <Box height={'5px'} />
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
