// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { BotonAcciones } from '../../../../common/components/ui/botones/BotonAcciones'

export default {
  title: 'Moléculas/Botones/BotonAcciones',
  component: BotonAcciones,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que permite al usuario ejecutar varias acciones diferentes. El botón puede tener un icono o un texto, y al hacer clic en él, se despliega un menú que muestra una lista de acciones disponibles. Cada acción puede tener un título, un icono y una función de acción asociada. El menú también puede ser cerrado haciendo clic fuera de él. Además, el componente incluye una funcionalidad de tooltip que muestra información sobre el botón cuando el usuario pasa el cursor sobre él.`,
      },
    },
  },
} as Meta<typeof BotonAcciones>

const Template: StoryFn<typeof BotonAcciones> = (args) => {
  args.acciones = [
    {
      color: 'primary',
      icono: 'ios_share',
      titulo: 'Compartir',
      desactivado: false,
      mostrar: true,
      name: 'compartir',
      id: 'id',
      accion: () => {},
    },
    {
      color: 'primary',
      icono: 'content_copy',
      titulo: 'Copiar',
      desactivado: false,
      mostrar: true,
      name: 'copiar',
      id: 'id',
      accion: () => {},
    },
    {
      color: 'primary',
      icono: 'file_download',
      titulo: 'Descargar',
      desactivado: false,
      mostrar: true,
      name: 'descargar',
      id: 'id',
      accion: () => {},
    },
  ]
  return <BotonAcciones {...args} />
}

export const Default = Template.bind({})
Default.storyName = 'Icono con acciones'
Default.args = {
  ...Default.args,
  id: 'idbtn',
  label: 'Más opciones',
  texto: 'Más opciones',
  variante: 'icono',
}

export const DefaultBoton = Template.bind({})
DefaultBoton.storyName = 'Botón con acciones'
DefaultBoton.args = {
  ...DefaultBoton.args,
  id: 'idbtn',
  texto: 'Más opciones',
  variante: 'boton',
}
