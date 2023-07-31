// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { IconoTooltip } from '../../../../common/components/ui'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Moléculas/Botones/IconoTooltip',
  component: IconoTooltip,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente que renderiza un botón con un icono y un tooltip que muestra información adicional al pasar el mouse sobre el botón. El componente acepta varias props, incluyendo el color del botón, el título del tooltip, el icono a mostrar y una función de acción que se ejecuta cuando se hace clic en el botón. El tooltip se activa al pasar el mouse sobre el botón y se desactiva al retirarlo. ',
      },
    },
  },
} as Meta<typeof IconoTooltip>

const Template: StoryFn<typeof IconoTooltip> = (args) => (
  <IconoTooltip {...args} />
)

export const Titulo = Template.bind({})
Titulo.storyName = 'Icono tooltip'
Titulo.args = {
  titulo: 'Mensaje tooltip para iconos',
  icono: 'savings',
  accion: action('()=>{console.log("Click en IconoTooltip")}'),
  name: 'IconToolTip',
}
export const Color = Template.bind({})
Color.storyName = 'Color de icono para tooltip'
Color.args = {
  ...Titulo.args,
  color: 'warning',
  // ...eventsFromNames,
}
export const NombreIcono = Template.bind({})
NombreIcono.storyName = 'Cambio de Icono MDI para tooltip'
NombreIcono.args = {
  ...Titulo.args,
  icono: 'favorite',
}
export const Desactivado = Template.bind({})
Desactivado.storyName = 'Button de tooltip desactivado'
Desactivado.args = {
  ...Titulo.args,
  desactivado: true,
}
