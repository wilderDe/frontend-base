// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { NavbarUser } from '../../../../common/components/ui'
import { CustomFrame } from '../../../utils/CustomFrame'

export default {
  title: 'Organismos/Navegación/NavBarUser',
  component: NavbarUser,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Este código crea una barra de navegación en React con varios botones y menús desplegables para el usuario, utilizando MUI y React hooks y componentes. Permite cambiar el tema de la aplicación, acceder a la información del perfil del usuario y mostrar un diálogo de ayuda. También utiliza diferentes contextos para el estado de la aplicación.`,
      },
    },
  },
} as Meta<typeof NavbarUser>

const Template1: StoryFn<typeof NavbarUser> = () => {
  return (
    <CustomFrame height="70px" padding={'10px'}>
      <NavbarUser />
    </CustomFrame>
  )
}

export const NavBarUserDefault = Template1.bind({})
NavBarUserDefault.storyName = 'NavBarUser'
