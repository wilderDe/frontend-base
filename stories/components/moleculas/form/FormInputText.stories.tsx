// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { FormInputText } from '../../../../common/components/ui/form'
import { Path, useForm } from 'react-hook-form'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  edad: number
  comentario: string
}

export default {
  title: 'Moléculas/Formulario/FormInputText',
  component: FormInputText,
  argTypes: {
    onChange: {
      type: 'function',
      control: () => {},
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'Componente que utiliza MUI para renderizar un campo de entrada de texto en un formulario. El componente utiliza la biblioteca "react-hook-form" para manejar la validación y el control del estado del formulario. Además, el componente tiene varias opciones de configuración, como el tipo de campo, la variante, el número de filas, si es una entrada multi-línea, etc. También se puede limpiar el campo y se puede mostrar u ocultar la contraseña si se utiliza el campo de tipo contraseña.',
      },
    },
  },
  // parameters: {
  //   accion: {
  //     handles: ['mouseover', 'CLICK aqui'],
  //   },
  // },
} as Meta

// const eventsFromNames = actions('accion')

// click en componenete
// storiesOf('Form/FormInputText', module).add('Click', () => (
//   <FormInputText id={'123123'} name="apellido" control={}></FormInputText>
// ))
// replica del componente
const Template: StoryFn<typeof FormInputText> = (args) => {
  const { control } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      carnet: '9999999',
      comentario: `Pedro Picapiedra es el personaje principal de la serie animada Los Picapiedra. Es un hombre prehistórico trabajador en una cantera de piedra, esposo de Vilma y padre de Pebbles. Es conocido por su personalidad apasionada y sentido del humor, y por su famoso grito "¡Yabba-Dabba-Doo!".Pedro Picapiedra es el personaje principal de la serie animada Los Picapiedra. Es un hombre prehistórico trabajador en una cantera de piedra, esposo de Vilma y padre de Pebbles. Es conocido por su personalidad apasionada y sentido del humor, y por su famoso grito "¡Yabba-Dabba-Doo!".`,
    },
  })

  return (
    <FormInputText
      {...args}
      control={control}
      name={args.name as Path<PersonaType>}
    />
  )
}

export const SB_Apellido = Template.bind({})
SB_Apellido.storyName = 'name - apellido'
SB_Apellido.args = {
  label: 'Apellido Paterno',
  id: 'textfield-form-1',
  name: 'apellido',
}

export const SB_Nombre = Template.bind({})
SB_Nombre.storyName = 'name - nombre'
SB_Nombre.args = {
  label: 'Nombre Completo',
  id: 'textfield-form-1',
  name: 'nombre',
}

export const SB_multilinea = Template.bind({})
SB_multilinea.storyName = 'Multilínea'
SB_multilinea.args = {
  label: 'Comentario',
  id: 'textfield-form-1',
  multiline: true,
  rows: 6,
  name: 'comentario',
}

export const SB_Disabled = Template.bind({})
SB_Disabled.storyName = 'Deshabilitado'
SB_Disabled.args = {
  name: 'carnet',
  label: 'Carnet de identificación',
  id: 'textfield-form-1',
  disabled: true,
}
export const SB_TipoNumber = Template.bind({})
SB_TipoNumber.storyName = 'Tipo number'
SB_TipoNumber.args = {
  name: 'edad',
  label: 'Edad en number',
  id: 'textfield-form-1',
  type: 'Number',
}

export const SB_Password = Template.bind({})
SB_Password.storyName = 'Tipo password'
SB_Password.args = {
  name: 'apellido',
  label: 'Apellido como password',
  id: 'textfield-form-1',
  type: 'password',
}

export const SB_Requerido = Template.bind({})
SB_Requerido.storyName = 'Campo Requerido'
SB_Requerido.parameters = {
  docs: {
    description: {
      story:
        'Antes de enviar el formulario UseForm nos pedirá llenar el campo vacio',
    },
  },
}
SB_Requerido.args = {
  name: 'nombre',
  label: 'Nombre',
  id: 'textfield-form-1',
  rules: { required: 'Este campo es requerido' },
}

export const SB_OnChange = Template.bind({})
SB_OnChange.storyName = 'Escuchar cambios'
SB_OnChange.parameters = {
  docs: {
    description: {
      story: 'UseForm también escucha los cambios',
    },
  },
}
SB_OnChange.args = {
  name: 'apellido',
  label: 'Buscar',
  id: 'textfield-form-1',
  type: 'search',
  onChange: action('Valor modificado'),
}

export const SB_Variant = Template.bind({})
SB_Variant.storyName = 'Variant'
SB_Variant.args = {
  name: 'apellido',
  label: 'Apellido como password',
  id: 'textfield-form-1',

  variant: 'filled',
}

export const SB_LabelVariant = Template.bind({})
SB_LabelVariant.storyName = 'Label Variant'
SB_LabelVariant.args = {
  name: 'apellido',
  label: 'Apellido como password',
  id: 'textfield-form-1',

  labelVariant: 'h5',
}
