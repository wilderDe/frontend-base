// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { Path, useForm } from 'react-hook-form'
import { FormInputDropdownMultiple } from '../../../../common/components/ui/form'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  fechaNacimiento: string
  edad: number
  idsPeliculasFavoritas: number[]
}

export default {
  title: 'Moléculas/Formulario/FormInputDropdownMultiple',
  component: FormInputDropdownMultiple,
  argTypes: {
    // onChange: { type: 'function', control: () => {} },
  },

  parameters: {
    docs: {
      description: {
        component:
          'Componente para crear un menú desplegable con opciones múltiples seleccionables y validación de formulario. Utiliza MUI y react-hook-form. Acepta varias propiedades como entrada, incluyendo las opciones y la etiqueta. Cuando se selecciona una opción, se actualiza el valor del formulario y se muestra una lista de opciones seleccionadas. Si hay un error de validación, se muestra un mensaje de ayuda.',
      },
    },
  },
  // parameters: {
  //   accion: {
  //     handles: ['mouseover', 'CLICK aqui'],
  //   },
  // },
} as Meta

const Template: StoryFn<typeof FormInputDropdownMultiple> = (args) => {
  const { control } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      fechaNacimiento: '05-21-1984',
      idsPeliculasFavoritas: [1, 2],
    },
  })

  return (
    <FormInputDropdownMultiple
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
SB_Vacio.storyName = 'Seleccionados'
SB_Vacio.args = {
  id: '1232131',
  label: 'Peliculas favoritas',
  name: 'idsPeliculasFavoritas',
  options: peliculas.map((item) => ({
    key: item.id + '',
    value: item.id + '',
    label: item.nombre,
  })),
}
