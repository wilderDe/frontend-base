// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { NivelSeguridadPass } from '../../../../common/components/ui/utils/NivelSeguridadPass'

export default {
  title: 'Moléculas/Utils/NivelSeguridadPass',
  component: NivelSeguridadPass,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que muestra el nivel de seguridad de una contraseña. El componente NivelSeguridadPass recibe una contraseña como prop y utiliza la función seguridadPass para calcular un puntaje de seguridad utilizando la librería zxcvbn-typescript. Luego, este componente utiliza un componente LinearColor para mostrar un indicador visual del nivel de seguridad de la contraseña. El color del indicador depende del puntaje de seguridad, donde un puntaje más alto se muestra en verde y un puntaje más bajo se muestra en rojo.`,
      },
    },
  },
} as Meta<typeof NivelSeguridadPass>

const Template: StoryFn<typeof NivelSeguridadPass> = (args) => {
  return <NivelSeguridadPass {...args} />
}

export const Default = Template.bind({})
Default.storyName = 'Nivel seguridad Password'
Default.args = {
  ...Default.args,
}

export const PassInsegura = Template.bind({})
PassInsegura.storyName = 'Contraseña insegura: "123456"'
PassInsegura.args = {
  pass: '123456',
}

export const PassMedia = Template.bind({})
PassMedia.storyName = 'Contraseña insegura: "PassMedia123"'
PassMedia.args = {
  pass: 'PassMedia123',
}

export const PassSegura = Template.bind({})
PassSegura.storyName = 'Contraseña insegura: "ContraseñaSegura123!"'
PassSegura.args = {
  pass: 'ContraseñaSegura123!',
}
