// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Path, useForm } from 'react-hook-form'
import { FormInputDropdown } from '../../../../common/components/ui/form'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  fechaNacimiento: string
  edad: number
  idPeliculaFavorita: number
}

export default {
  title: 'Moléculas/Formulario/FormInputDropdown',
  component: FormInputDropdown,

  parameters: {
    docs: {
      description: {
        component:
          'Componente para crear un menú desplegable con opciones seleccionables y validación de formulario. Utiliza MUI para la interfaz de usuario y react-hook-form para el control de formularios, para más información: [Using Material UI with React Hook Form](https://blog.logrocket.com/using-material-ui-with-react-hook-form/)',
      },
    },
  },
} as Meta

const Template: StoryFn<typeof FormInputDropdown> = (args) => {
  const { control } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      fechaNacimiento: '05-21-1984',
      idPeliculaFavorita: 2,
    },
  })

  return (
    <FormInputDropdown
      {...args}
      control={control}
      name={args.name as Path<PersonaType>}
    />
  )
}

const peliculas = [
  { id: 1, nombre: 'Toy Story' },
  { id: 2, nombre: 'Bichos: Una aventura en miniatura' },
  { id: 3, nombre: 'Toy Story 2' },
  { id: 4, nombre: 'Monsters, Inc.' },
  { id: 5, nombre: 'Buscando a Nemo' },
  { id: 6, nombre: 'Los Increibles' },
  { id: 7, nombre: 'Cars' },
]

export const SB_Vacio = Template.bind({})
SB_Vacio.storyName = 'Vacío'
SB_Vacio.args = {
  id: '1232131',
  label: 'Película favorita',
  name: 'idPeliculaFavorita',
  options: peliculas.map((item) => ({
    key: item.id + '',
    value: item.id + '',
    label: item.nombre,
  })),
  onChange: action('Cambio del valor'),
}
