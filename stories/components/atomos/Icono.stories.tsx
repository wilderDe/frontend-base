import { Meta, StoryFn } from '@storybook/react'

import { Icono } from '../../../common/components/ui'

export default {
  title: 'Atomos/Elementos/Icono',
  component: Icono,
  parameters: {
    docs: {
      description: {
        component:
          'El componente `Icono` es un wrapper de `Icon` del framework MUI que permite mostrar un icono en la interfaz de usuario con opciones de personalización de color y tamaño. Puede ser utilizado en cualquier parte de la aplicación donde se necesite mostrar un icono. Las props `color` y `fontSize` se pueden utilizar para personalizar el color y el tamano del icono, respectivamente.',
      },
    },
  },
} as Meta<typeof Icono>

// replica del componente
const Template: StoryFn<typeof Icono> = (args) => <Icono {...args} />

export const PorDefecto = Template.bind({})
PorDefecto.storyName = 'Por defecto'
PorDefecto.args = {
  children: 'home',
}

export const TamanoGrande = Template.bind({})
TamanoGrande.storyName = 'Tamaño grande'
TamanoGrande.args = {
  children: 'home',
  fontSize: 'large',
}

export const ColorSecundario = Template.bind({})
ColorSecundario.storyName = 'Color secundario'
ColorSecundario.args = {
  children: 'home',
  color: 'secondary',
}

export const TamanoPequenoYColorError = Template.bind({})
TamanoPequenoYColorError.storyName = 'Tamaño pequeño y color error'
TamanoPequenoYColorError.args = {
  children: 'warning',
  fontSize: 'small',
  color: 'error',
}
