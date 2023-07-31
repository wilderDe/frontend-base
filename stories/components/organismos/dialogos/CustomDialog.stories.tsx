// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { CustomDialog } from '../../../../common/components/ui'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Organismos/Dialogos/CustomDialog',
  component: CustomDialog,
  argTypes: {
    children: {
      description: 'ReactNode',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `El componente CustomDialog es una implementación flexible de un cuadro de diálogo basado en el sistema de diseño MUI. 
        Proporciona opciones adicionales, como el cierre con clic fuera del cuadro, desactivar la pulsación de tecla Escape, desplazamiento de contenido y personalización del papel. 
        Además, es capaz de adaptarse al tamaño de pantalla y ofrece un manejo conveniente de eventos de cierre y un diseño estilizado con un título, contenido y acciones.`,
      },
    },
  },
} as Meta<typeof CustomDialog>

// const eventsFromNames = actions('accion')

// replica del componente
const Template: StoryFn<typeof CustomDialog> = (args) => (
  <CustomFrame height="500px">
    <CustomDialog {...args} />
  </CustomFrame>
)
export const Activo = Template.bind({})
Activo.storyName = 'Modal activo'
Activo.args = {
  isOpen: true,
  fullScreen: false,
  maxWidth: 'md',
  title: 'Titulo de modal',
  handleClose: action('handleClose: ()=>{console.log("Cerrar Modal")}'),
  disablePortal: true,
  disableScrollLock: true,
}
export const FullWidth = Template.bind({})
FullWidth.storyName = 'Modal pantalla completa'
FullWidth.args = {
  ...Activo.args,
  fullScreen: true,
  disablePortal: true,
  disableScrollLock: true,
}

export const ComponeneteHijo = Template.bind({})
ComponeneteHijo.storyName = 'Componenete hijo para modal'
ComponeneteHijo.args = {
  ...Activo.args,
  fullScreen: false,
  children: (
    <div>
      <h3>Componente React...</h3>
      <h6> React node</h6>
    </div>
  ),
  disablePortal: true,
  disableScrollLock: true,
}

export const MaxWidth = Template.bind({})
MaxWidth.storyName = 'Tamaño para modal'
MaxWidth.args = {
  ...Activo.args,
  maxWidth: 'xs',
  children: (
    <div>
      <h3>Componente React...</h3>
      <h6> React node</h6>
    </div>
  ),
  disablePortal: true,
  disableScrollLock: true,
}

// // click en componenete
// storiesOf('CustomDialog', module).add('Cerrado', () => (
//   <CustomDialog
//     title="Modal cerrado"
//     isOpen={false}
//     handleClose={() => {}}
//   ></CustomDialog>
// ))
// export const Titulo = Template.bind({})
// Titulo.storyName = 'Icono tooltip'
// Titulo.args = {
//   titulo: 'Mensaje tooltip para iconos',
//   icono: 'savings',
//   accion: action('()=>{console.log("Click en IconoTooltip")}'),
//   name: 'IconToolTip',
// }
