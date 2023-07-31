// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Path, useForm } from 'react-hook-form'
import FormInputImage from '../../../../common/components/ui/form/FormInputImage'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  edad: number
  imagenes: FileList
}

export default {
  title: 'Moléculas/Formulario/FormInputImage',
  component: FormInputImage,
  argTypes: {
    onChange: {
      type: 'function',
      control: () => {},
    },
  },

  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    docs: {
      description: {
        component:
          'Componente para cargar imágenes en un formulario. Utiliza MUI y React Hook Form. El componente acepta varias propiedades, incluyendo el ID, el nombre del campo, el control del formulario, el límite de tamaño máximo de archivo, y el tipo de archivo permitido. El componente muestra una vista previa de la imagen cargada o una lista de imágenes, según el número de archivos permitidos. Utiliza una serie de funciones auxiliares para manejar la carga de archivos y la eliminación de archivos de la lista de archivos cargados.',
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
// storiesOf('Form/FormInputImage', module).add('Click', () => (
//   <FormInputImage id={'123123'} name="apellido" control={}></FormInputImage>
// ))
// replica del componente
const Template: StoryFn<typeof FormInputImage> = (args) => {
  const { control } = useForm<PersonaType>({
    defaultValues: {
      id: 12,
      nombre: 'Pedro',
      apellido: 'Picapiedra',
      edad: 32,
      carnet: '9999999',
    },
  })

  return (
    <FormInputImage
      {...args}
      control={control}
      name={args.name as Path<PersonaType>}
    />
  )
}

export const SB_CargaImagenes = Template.bind({})
SB_CargaImagenes.storyName = 'Cargar de imágenes'
SB_CargaImagenes.args = {
  label: 'Imágenes',
  id: 'textfield-form-1',
  name: 'imagenes',
  multiple: true,
}
export const SB_CargarNImagenes = Template.bind({})
SB_CargarNImagenes.storyName = 'Cargar varias imágenes (máximo 5)'
SB_CargarNImagenes.args = {
  label: 'Imágenes',
  id: 'textfield-form-3',
  name: 'imagenes',
  multiple: true,
  limite: 5,
}

export const SB_CargarImagen = Template.bind({})
SB_CargarImagen.storyName = 'Cargar una Imagen'
SB_CargarImagen.args = {
  label: 'Imagen',
  id: 'textfield-form-2',
  name: 'imagenes',
}

export const SB_CargarImagenPNG = Template.bind({})
SB_CargarImagenPNG.storyName = 'Solo imágen PNG'
SB_CargarImagenPNG.args = {
  label: 'Imagen',
  id: 'textfield-form-2',
  name: 'imagenes',
  tiposPermitidos: ['png'],
}
