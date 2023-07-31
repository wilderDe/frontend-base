// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { NavbarLogin } from '../../../../common/components/ui/navbars/NavbarLogin'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Organismos/Navegación/NavBarLogin',
  component: NavbarLogin,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Ejemplo barra de navegación con dos botones y un diálogo modal de ayuda. Los botones permiten cambiar el tema de la aplicación y abrir el diálogo modal con información sobre la aplicación. El código utiliza el framework MUI y varios componentes y hooks de React.`,
      },
    },
  },
} as Meta<typeof NavbarLogin>

const Template1: StoryFn<typeof NavbarLogin> = () => {
  return (
    <CustomFrame height="70px" padding={'10px'}>
      <NavbarLogin />
    </CustomFrame>
  )
}

export const NavBaroLogin = Template1.bind({})
NavBaroLogin.storyName = 'NavBarLogin'
