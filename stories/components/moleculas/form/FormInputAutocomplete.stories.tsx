// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'
import {
  FormInputAutocomplete,
  optionType,
} from '../../../../common/components/ui/form/FormInputAutocomplete'
import { useEffect, useState } from 'react'
import { imprimir } from '../../../../common/utils/imprimir'
import { Servicios } from '../../../../common/services'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  fechaNacimiento: string
  edad: number
  productos: number[]
  idiomas: optionType[]
}

interface BusquedaParams {
  buscar?: string
}

interface Producto {
  id: string
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

interface RespuestaBusqueda {
  products: Producto[]
  total: number
  skip: number
  limit: number
}

export default {
  title: 'Moléculas/Formulario/FormInputAutocomplete',
  component: FormInputAutocomplete,
  argTypes: {},
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    docs: {
      description: {
        component:
          'Es un componente que utiliza la librería `react-hook-form` y la librería MUI para crear un campo de entrada de texto con autocompletado, para más información: [Using Material UI with React Hook Form](https://blog.logrocket.com/using-material-ui-with-react-hook-form/)',
      },
    },
  },
} as Meta<typeof FormInputAutocomplete>

const Template: StoryFn<typeof FormInputAutocomplete> = (args) => {
  const [opciones, setOpciones] = useState<Array<optionType>>([])

  const { control, watch } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      fechaNacimiento: '05-21-1984',
      productos: [],
    },
  })

  const busqueda = async ({ buscar }: BusquedaParams) => {
    const lista: RespuestaBusqueda = await Servicios.get({
      url: 'https://dummyjson.com/products/search',
      withCredentials: false,
      params: {
        q: buscar,
      },
    })

    setOpciones(
      lista.products.map((value) => ({
        key: value.id,
        value: value.id,
        label: value.title,
      }))
    )
  }

  const productos = watch('productos')

  useEffect(() => {
    imprimir(`productos: `, productos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(productos)])

  return (
    <FormInputAutocomplete
      {...args}
      id={'rolesMultiple'}
      name={'productos'}
      control={control}
      label="Productos"
      disabled={false}
      options={opciones}
      onInputChange={async (event, value) => {
        await busqueda({ buscar: value })
      }}
      rules={{ required: 'Este campo es requerido' }}
    />
  )
}

const TemplateAbierto: StoryFn<typeof FormInputAutocomplete> = (args) => {
  const { control, watch } = useForm<PersonaType>({
    defaultValues: {
      idiomas: [
        { key: '1', value: 'inglés', label: 'inglés' },
        {
          key: '2',
          value: 'español',
          label: 'español',
        },
        { key: '3', value: 'francés', label: 'francés' },
        { key: '4', value: 'alemán', label: 'alemán' },
        {
          key: '5',
          value: 'japonés',
          label: 'japonés',
        },
      ],
    },
  })

  const idiomas = watch('idiomas')

  useEffect(() => {
    imprimir(`idiomas: `, idiomas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(idiomas)])

  return (
    <FormInputAutocomplete
      {...args}
      id={'rolesMultiple'}
      name={'idiomas'}
      control={control}
      label="Idiomas"
      disabled={false}
      options={[]}
      onInputChange={async (event, value) => {
        imprimir(value)
      }}
      rules={{ required: 'Este campo es requerido' }}
    />
  )
}

export const SB_Simple = Template.bind({})
SB_Simple.storyName = 'Simple'
SB_Simple.args = {
  id: '1232131',
  label: 'Idiomas',
  name: 'id-idiomas',
  searchIcon: true,
  forcePopupIcon: true,
}

export const SB_Multiple = Template.bind({})
SB_Multiple.storyName = 'Multiple'
SB_Multiple.args = {
  id: '1232131',
  label: 'Productos',
  name: 'productos',
  freeSolo: true,
  multiple: true,
  searchIcon: true,
  forcePopupIcon: true,
  newValues: false,
  isOptionEqualToValue: (option, value) => option.value == value.value,
}

export const SB_MultipleAbierto = TemplateAbierto.bind({})
SB_MultipleAbierto.storyName = 'Campo abierto para cualquier texto'
SB_MultipleAbierto.args = {
  id: '1232131',
  label: 'Productos',
  name: 'productos',
  freeSolo: true,
  multiple: true,
  forcePopupIcon: false,
  newValues: true,
  isOptionEqualToValue: (option, value) => option.value == value.value,
}
