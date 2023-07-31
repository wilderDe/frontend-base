// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { CustomFrame } from '../../../utils/CustomFrame'
import DebugBanner from '../../../../common/components/ui/utils/DebugBanner'
import { Constantes } from '../../../../config'

export default {
  title: 'Atomos/Utils/DebugBanner',
  component: DebugBanner,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Este componente muestra una etiqueta que indica el entorno en el que se encuentra el sistema, ya sea Desarrollo o Test demo en función de las variables de entorno del sistema.`,
      },
    },
  },
} as Meta<typeof DebugBanner>

const Template2: StoryFn<typeof DebugBanner> = (args: any) => {
  Constantes.appEnv = args.texto
  return (
    <CustomFrame height="100px" padding="none" border="10px">
      <DebugBanner />
    </CustomFrame>
  )
}
export const DebugBanerDevelop = Template2.bind({})
DebugBanerDevelop.storyName = 'Banner develop'
DebugBanerDevelop.args = {
  texto: 'development',
}

export const DebugBanerTest = Template2.bind({})
DebugBanerTest.storyName = 'Banner test'
DebugBanerTest.args = {
  texto: 'test',
}
