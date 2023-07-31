// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { CustomFrame } from '../../../utils/CustomFrame'
import { LayoutUser } from '../../../../common/components/layouts'

export default {
  title: 'Moléculas/Layouts/LayoutUser',
  component: LayoutUser,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `El componente consta de una barra de navegación, un área principal de contenido con un título opcional y un área de pie de página. También utiliza el contexto de la aplicación para determinar si el menú lateral está abierto o cerrado y ajustar el ancho de la sección principal en consecuencia. En general, este código proporciona una estructura básica para una página de usuario en una aplicación web.`,
      },
    },
  },
} as Meta<typeof LayoutUser>

const Template1: StoryFn<typeof LayoutUser> = (args) => {
  return (
    <CustomFrame height="200px">
      <LayoutUser {...args} />
    </CustomFrame>
  )
}

export const Default = Template1.bind({})
Default.storyName = 'Layout user'
Default.args = {
  title: 'Layout User',
  children: <div></div>,
  ...Default.args,
}
