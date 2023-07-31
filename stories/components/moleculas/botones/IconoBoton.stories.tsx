// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconoBoton } from '../../../../common/components/ui/botones/IconoBoton'

export default {
  title: 'Moléculas/Botones/IconoBoton',
  component: IconoBoton,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que toma una serie de propiedades, incluyendo el id, texto, icono, variante, descripcion y acción. La propiedad variante determina si el componente se renderiza como un botón o un tooltip. Si la propiedad variante se establece en "boton", el componente renderiza un componente Material UI Button. Si la propiedad variante se establece en "icono", el componente renderiza un componente Material UI IconoTooltip`,
      },
    },
  },
} as Meta<typeof IconoBoton>

const Template: StoryFn<typeof IconoBoton> = (args) => <IconoBoton {...args} />

export const Default = Template.bind({})
Default.storyName = 'Boton agregar'
Default.args = {
  id: 'idbtn',
  texto: 'Agregar',
  descripcion: '',
  icono: 'add_circle_outline',
  accion: action('()=>{console.log("Click en IconoTooltip")}'),
}

export const BtnAgregarIcono = Template.bind({})
BtnAgregarIcono.storyName = 'Icono agregar'
BtnAgregarIcono.args = {
  id: 'idbtn',
  texto: 'icono',
  descripcion: '',
  icono: 'add_circle_outline',
  variante: 'icono',
  accion: action('()=>{console.log("Click en IconoTooltip")}'),
}
