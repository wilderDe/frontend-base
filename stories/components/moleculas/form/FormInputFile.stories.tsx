// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { Path, useForm } from 'react-hook-form'
import FormInputFile from '../../../../common/components/ui/form/FormInputFile'

export interface PersonaType {
  id: number
  nombre: string
  apellido: string
  carnet: string
  edad: number
  imagenes: FileList
}

export default {
  title: 'Moléculas/Formulario/FormInputFile',
  component: FormInputFile,
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
          'Componente que tiene la capacidad de agregar, eliminar y mostrar archivos cargados. También tiene funciones para convertir el objeto Files(e.target.files) a un array y para unir dos objetos Files. El componente acepta varias propiedades, como el límite de archivos permitidos y los tipos de archivo permitidos',
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
// storiesOf('Form/FormInputFile', module).add('Click', () => (
//   <FormInputFile id={'123123'} name="apellido" control={}></FormInputFile>
// ))
// replica del componente
const Template: StoryFn<typeof FormInputFile> = (args) => {
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
    <FormInputFile
      {...args}
      control={control}
      name={args.name as Path<PersonaType>}
    />
  )
}

export const SB_CargaDocumentos = Template.bind({})
SB_CargaDocumentos.storyName = 'Cargar de documentos'
SB_CargaDocumentos.args = {
  label: 'Documentos',
  id: 'textfield-form-1',
  name: 'imagenes',
  multiple: true,
}
export const SB_CargarNDocumentos = Template.bind({})
SB_CargarNDocumentos.storyName = 'Cargar varios archivos (máximo 5)'
SB_CargarNDocumentos.args = {
  label: 'Documento',
  id: 'textfield-form-3',
  name: 'imagenes',
  multiple: true,
  limite: 5,
}

export const SB_CargaDocumento = Template.bind({})
SB_CargaDocumento.storyName = 'Cargar un documento'
SB_CargaDocumento.args = {
  label: 'Documento',
  id: 'textfield-form-2',
  name: 'imagenes',
}

export const SB_CargaDocumentoPDF = Template.bind({})
SB_CargaDocumentoPDF.storyName = 'Cargar un documento (solo PDF)'
SB_CargaDocumentoPDF.args = {
  label: 'Documento',
  id: 'textfield-form-2',
  name: 'imagenes',
  tiposPermitidos: ['pdf'],
}
