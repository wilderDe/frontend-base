// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Paginacion } from '../../../../common/components/ui/datatable/Paginacion'

export default {
  title: 'Organismos/Datatable/Paginación',
  component: Paginacion,
  parameters: {
    docs: {
      description: {
        component:
          'El componente toma como entrada un número de página, un límite de filas por página y un total de filas. El usuario puede cambiar el límite de filas por página a través de un menú desplegable. El componente muestra información sobre el rango de filas que se están mostrando y permite al usuario navegar entre las páginas utilizando botones para avanzar y retroceder.',
      },
    },
  },
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
} as Meta<typeof Paginacion>

const Template: StoryFn<typeof Paginacion> = (args) => <Paginacion {...args} />

export const SB_Paginacion = Template.bind({})
SB_Paginacion.storyName = 'Páginación'
SB_Paginacion.args = {
  limite: 10,
  pagina: 2,
  total: 500,
  cambioPagina: action(
    'cambioPagina: (nuevaPagina: number) => {console.log("Se ha cambiado la página")}'
  ),
  cambioLimite: action(
    'cambioLimite: (nuevoLimite: number) => {console.log("Se ha cambiado el límite")}'
  ),
}
