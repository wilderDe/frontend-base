// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { FullScreenLoading } from '../../../../common/components/ui/progreso/FullScreenLoading'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Moléculas/Elementos/FullScreenLoading',
  component: FullScreenLoading,
  parameters: {
    docs: {
      description: {
        component: `Componente que muestra una animación de spinner y un mensaje opcional de carga. El spinner está compuesto por doce barras que giran alrededor del centro. El componente utiliza los componentes Box y Typography de Material UI para posicionar y mostrar el mensaje de carga, y utiliza CSS para animar el spinner.`,
      },
    },
  },
} as Meta<typeof FullScreenLoading>

const Template1: StoryFn<typeof FullScreenLoading> = (args) => {
  return (
    <CustomFrame height="400px" color="white">
      <FullScreenLoading {...args} />
    </CustomFrame>
  )
}

export const Default = Template1.bind({})
Default.storyName = 'Full screen loading'
Default.args = {
  ...Default.args,
}
