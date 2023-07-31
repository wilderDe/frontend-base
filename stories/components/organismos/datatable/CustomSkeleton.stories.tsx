// import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { TableSkeleton } from '../../../../common/components/ui'

export default {
  title: 'Organismos/Datatable/TableSkeleton',
  component: TableSkeleton,
  argTypes: {
    accion: {
      type: 'function',
      control: () => {},
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente que crea una tabla de esqueletos con un número específico de filas y columnas. Utiliza los componentes de MUI TableContainer, Table, TableBody, TableCell y TableRow para crear la estructura de la tabla. El número de filas y columnas se proporcionan como entradas al componente',
      },
    },
  },
} as Meta<typeof TableSkeleton>

const Template: StoryFn<typeof TableSkeleton> = (args) => (
  <TableSkeleton {...args} />
)

export const SB_Formato = Template.bind({})
SB_Formato.storyName = 'Cantidad'
SB_Formato.args = {
  columnas: 4,
  filas: 5,
}
