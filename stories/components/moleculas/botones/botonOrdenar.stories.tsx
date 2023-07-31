// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { BotonOrdenar } from '../../../../common/components/ui/botones/BotonOrdenar'
import {
  CriterioOrdenType,
  OrdenEnum,
} from '../../../../common/types/ordenTypes'
import { useState } from 'react'

export default {
  title: 'Moléculas/Botones/BotonOrdenar',
  component: BotonOrdenar,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Componente que muestra un botón que al ser presionado despliega un menú con opciones para ordenar una lista de elementos. El botón muestra un icono y un badge que indica la cantidad de criterios de ordenamiento que se han aplicado. El componente recibe como propiedades un conjunto de criterios de ordenamiento, una función para cambiar los criterios, un identificador y un texto para mostrar en el botón.`,
      },
    },
  },
} as Meta<typeof BotonOrdenar>
const Template1: StoryFn<typeof BotonOrdenar> = (args) => {
  const [ordenCriterios, setOrdenCriterios] = useState<
    Array<CriterioOrdenType>
  >([
    { campo: 'nombre', nombre: 'Nombre', ordenar: true, orden: OrdenEnum.DESC },
    { campo: 'resumen', nombre: 'Resumen', ordenar: true },
    {
      campo: 'fechaPublicacion',
      nombre: 'Fecha Publicación',
      ordenar: true,
    },
    { campo: 'acciones', nombre: 'Eventos' },
  ])
  args.criterios = ordenCriterios
  args.cambioCriterios = setOrdenCriterios
  return <BotonOrdenar {...args} />
}

const Template2: StoryFn<typeof BotonOrdenar> = (args) => {
  const [ordenCriterios, setOrdenCriterios] = useState<
    Array<CriterioOrdenType>
  >([
    { campo: 'nombre', nombre: 'Nombre', ordenar: true },
    { campo: 'resumen', nombre: 'Resumen', ordenar: true },
    {
      campo: 'fechaPublicacion',
      nombre: 'Fecha Publicación',
      ordenar: true,
    },
    { campo: 'acciones', nombre: 'Eventos' },
  ])
  args.criterios = ordenCriterios
  args.cambioCriterios = setOrdenCriterios
  return <BotonOrdenar {...args} />
}
export const Default = Template1.bind({})
Default.storyName = 'Boton ordenar'
Default.args = {
  ...Default.args,
  id: 'idbtn',
  desactivado: false,
  label: 'Orden',
}
export const BtnOrdenarVacio = Template2.bind({})
BtnOrdenarVacio.storyName = 'Boton ordenar sin criterios'
BtnOrdenarVacio.args = {
  ...Default.args,
  id: 'idbtn',
  desactivado: false,
  label: 'Orden',
  criterios: [],
}
