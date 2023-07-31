// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { FormInputSlider } from '../../../../common/components/ui/form'
import { Path, useForm } from 'react-hook-form'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { imprimir } from '../../../../common/utils/imprimir'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  fechaNacimiento: string
  edad: number
}

export default {
  title: 'Moléculas/Formulario/FormInputSlider',
  component: FormInputSlider,
  argTypes: {},

  parameters: {
    docs: {
      description: {
        component:
          'Componente que se utiliza para crear un control deslizante para seleccionar un valor numérico. El componente utiliza Slider de MUI para renderizar el control deslizante y utiliza el hook useController de React Hook Form para obtener el control del campo. Cuando se mueve el control deslizante, se llama a la función handleChange para actualizar el valor del campo.',
      },
    },
  },
} as Meta

const Template: StoryFn<typeof FormInputSlider> = (args) => {
  const { control, setValue, watch } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      fechaNacimiento: '05-21-1984',
      carnet: '9999999',
    },
  })

  const p = watch('edad')

  useEffect(() => {
    imprimir(p)
  }, [p])

  return (
    <>
      <FormInputSlider
        {...args}
        control={control}
        setValue={setValue}
        name={args.name as Path<PersonaType>}
      />
      <Typography>{watch(args.name as Path<PersonaType>)}</Typography>
    </>
  )
}

export const SB_Slider = Template.bind({})
SB_Slider.storyName = 'Slider'
SB_Slider.args = {
  name: 'edad',
  label: 'Edad',
  id: 'input-slider-form-',
}
