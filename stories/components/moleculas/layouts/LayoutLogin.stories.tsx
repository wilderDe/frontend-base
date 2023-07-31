// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { LayoutLogin } from '../../../../common/components/layouts'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Moléculas/Layouts/LayoutLogin',
  component: LayoutLogin,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que utiliza la librería MUI para renderizar una barra de navegación y una sección principal con un título y contenido. El componente acepta una prop opcional llamada "title" que se utiliza para establecer el título de la página. El contenido principal se pasa como children al componente. Al final, el componente devuelve un div que contiene la barra de navegación, el título de la página y el contenido principal.`,
      },
    },
  },
} as Meta<typeof LayoutLogin>

const Template1: StoryFn<typeof LayoutLogin> = (args) => {
  return (
    <CustomFrame height="200px">
      <LayoutLogin {...args} />
    </CustomFrame>
  )
}

export const Default = Template1.bind({})
Default.storyName = 'Layout login'
Default.args = {
  title: 'Layout Login',
  children: <div></div>,
  ...Default.args,
}
