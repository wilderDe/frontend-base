// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BotonBuscar } from '../../../../common/components/ui/botones/BotonBuscar'
export default {
  title: 'Moléculas/Botones/BotonBuscar',
  component: BotonBuscar,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que devuelve un botón de alternancia con un icono de búsqueda dentro. La función toma como argumentos un id, un valor booleano llamado "seleccionado" que indica si el botón está seleccionado o no, y una función llamada "cambiar" que se llama cuando se hace clic en el botón para cambiar su estado. Cuando se hace clic en el botón, la función "cambiar" se llama con el valor opuesto de "seleccionado". El botón tiene un atributo aria-label de "search".`,
      },
    },
  },
} as Meta<typeof BotonBuscar>

const Template: StoryFn<typeof BotonBuscar> = (args) => (
  <BotonBuscar {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Botón buscar'
Default.args = {
  id: 'idbtnBuscar',
  seleccionado: false,
  cambiar: action('()=>{console.log("Click en IconoTooltip")}'),
}

export const Presionado = Template.bind({})
Presionado.storyName = 'Botón buscar presionado'
Presionado.args = {
  id: 'idbtnBuscar',
  seleccionado: true,
  cambiar: action('()=>{console.log("Click en IconoTooltip")}'),
}
