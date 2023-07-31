import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { AlertDialog } from '../../../../common/components/ui'
import { action } from '@storybook/addon-actions'
import Button from '@mui/material/Button'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Organismos/Dialogos/AlertDialog',
  component: AlertDialog,
  argTypes: {
    children: {
      description: 'ReactNode',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `El componente AlertDialog es un cuadro de diálogo basado en MUI que muestra un título, un texto descriptivo y acciones personalizadas. 
        Se puede controlar su apertura mediante la prop isOpen y ofrece opciones para deshabilitar el portal y el bloqueo de desplazamiento.`,
      },
    },
  },
} as Meta<typeof AlertDialog>

// replica del componente
const Template: StoryFn<typeof AlertDialog> = (args) => (
  <CustomFrame height="300px">
    <AlertDialog {...args} />
  </CustomFrame>
)
export const Alerta = Template.bind({})
Alerta.storyName = 'Modal Alerta'
Alerta.args = {
  isOpen: true,
  titulo: 'Modal de alerta',
  texto: 'Esto es un modal de alerta',
  disablePortal: true,
  disableScrollLock: true,
}
export const ComponeneteHijo = Template.bind({})
ComponeneteHijo.args = {
  isOpen: true,
  titulo: 'Modal de alerta',
  texto: 'Esto es un modal de alerta',
  children: <div>React node children</div>,
  disablePortal: true,
  disableScrollLock: true,
}

export const AccionesComponeneteHijo = Template.bind({})
AccionesComponeneteHijo.args = {
  ...Alerta.args,
  children: (
    <div>
      {' '}
      <Button onClick={action('Cancelar accion')}>Cancelar</Button>{' '}
      <Button onClick={action('Aceptar accion')}>Aceptar</Button>{' '}
    </div>
  ),
  disablePortal: true,
  disableScrollLock: true,
}
