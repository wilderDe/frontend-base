// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { Path, useForm } from 'react-hook-form'
import { FormInputRadio } from '../../../../common/components/ui/form'
import { useEffect } from 'react'
import { imprimir } from '../../../../common/utils/imprimir'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  fechaNacimiento: string
  edad: number
  idsPeliculasFavoritas: string
}

export default {
  title: 'Moléculas/Formulario/FormInputRadio',
  component: FormInputRadio,
  argTypes: {},

  parameters: {
    docs: {
      description: {
        component:
          'Componente que se utiliza para crear una lista de opciones de botones de radio. El componente acepta varias propiedades, incluyendo el nombre del campo, la etiqueta del campo, las opciones de botón de radio disponibles y una función para establecer el valor del campo. El componente utiliza RadioGroup y FormControlLabel de Material-UI para renderizar cada opción como un botón de radio. Este componente es útil para crear formularios que requieren la selección de una sola opción.',
      },
    },
  },
} as Meta

const Template: StoryFn<typeof FormInputRadio> = (args) => {
  const { control, watch } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      fechaNacimiento: '05-21-1984',
      idsPeliculasFavoritas: '2',
    },
  })

  const p = watch('idsPeliculasFavoritas')

  useEffect(() => {
    imprimir(p)
  }, [p])

  return (
    <FormInputRadio
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
