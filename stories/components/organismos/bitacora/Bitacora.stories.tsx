import { Meta, StoryFn } from '@storybook/react'
import { IBitacoraAcciones } from '../../../../common/components/ui/bitacora/bitacoraTypes'
import { Bitacora } from '../../../../common/components/ui/bitacora/Bitacora'
import { Grid, Typography } from '@mui/material'
import {
  formatoLiteral,
  generarFechaAnterior,
  stringToDate,
} from '../../../../common/utils/fechas'

export default {
  title: 'Organismos/Bitácora/Bitácora',
  component: Bitacora,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    docs: {
      description: {
        component:
          'Componente que crea una línea de tiempo de elementos de bitácora. El componente utiliza varios componentes de la biblioteca MUI, incluyendo "Card", "CardHeader", "Timeline", "TimelineItem", "TimelineSeparator", "TimelineDot", "TimelineContent" y "Typography", para construir la línea de tiempo. Toma dos propiedades como entrada, un título y una matriz de elementos de bitácora, y renderiza la línea de tiempo basada en los elementos de la matriz. Si no hay elementos en la matriz, se muestra un mensaje de "Sin resultados". En general, este código proporciona una manera fácil de mostrar una línea de tiempo de eventos en una aplicación web.',
      },
    },
  },
} as Meta<typeof Bitacora>

const Template: StoryFn<typeof Bitacora> = (args) => <Bitacora {...args} />

const listaAcciones: IBitacoraAcciones[] = [
  {
    titulo: 'Procesamiento de la orden',
    items: [
      {
        titulo: 'Elaborado',
        descripcion: 'Recibida orden de envío',
        fecha: generarFechaAnterior(10, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'check',
      },
      {
        titulo: 'Iniciado',
        descripcion: 'Procesamiento de la orden por el almacén',
        fecha: generarFechaAnterior(9, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'check',
      },
      {
        titulo: 'Realizado',
        descripcion: 'Empaquetado de los artículos',
        fecha: generarFechaAnterior(8, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'check',
      },
      {
        titulo: 'Realizado',
        descripcion: 'Etiquetado del paquete',
        fecha: generarFechaAnterior(7, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'more_horiz',
      },
    ],
  },
  {
    titulo: 'Envío del paquete',
    items: [
      {
        titulo: 'Registrado',
        descripcion: 'Carga del paquete en el camión de envío',
        fecha: generarFechaAnterior(6, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'more_horiz',
      },
      {
        titulo: 'Autorizado',
        descripcion: 'Salida del camión de envío del almacén',
        fecha: generarFechaAnterior(5, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'check',
      },
      {
        titulo: 'Registrado',
        descripcion: 'Llegada del camión de envío al centro de distribución',
        fecha: generarFechaAnterior(4, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'people',
      },
      {
        titulo: 'Realizado',
        descripcion: 'Clasificación del paquete en el centro de distribución',
        fecha: generarFechaAnterior(3, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'people',
      },
      {
        titulo: 'Registrado',
        descripcion: 'Carga del paquete en el avión de envío',
        fecha: generarFechaAnterior(2, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'check',
      },
      {
        titulo: 'Autorizado',
        descripcion: 'Salida del avión de envío del centro de distribución',
        fecha: generarFechaAnterior(1, 'days', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'people',
      },
      {
        titulo: 'Registrado',
        descripcion: 'Llegada del avión de envío al aeropuerto de destino',
        fecha: generarFechaAnterior(20, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'people',
      },
      {
        titulo: 'Autorizado',
        descripcion: 'Desembarque del paquete del avión de envío',
        fecha: generarFechaAnterior(10, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'check',
      },
    ],
  },
  {
    titulo: 'Entrega del paquete',
    items: [
      {
        titulo: 'Realizado',
        descripcion: 'Entrega del paquete a la empresa de mensajería local',
        fecha: generarFechaAnterior(9, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'check',
      },
      {
        titulo: 'Registrado',
        descripcion:
          'Llegada del paquete a la oficina de la empresa de mensajería local',
        fecha: generarFechaAnterior(8, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'people',
      },
      {
        titulo: 'Realizado',
        descripcion: 'Entrega programada del paquete al destinatario',
        fecha: generarFechaAnterior(7, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'info',
        icono: 'check',
      },
      {
        titulo: 'Verificado',
        descripcion: 'Entrega exitosa del paquete al destinatario',
        fecha: generarFechaAnterior(6, 'hours', 'DD/MM/YYYY HH:mm:ss'),
        color_icono: 'success',
        icono: 'check',
      },
    ],
  },
]

const listaAccionesPorTiempo: IBitacoraAcciones[] = [
  {
    titulo: 'Hoy',
    items: [
      {
        descripcion: 'Aprobó iniciativa 20-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(1, 'second', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Publicó iniciativa 20-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(1, 'minutes', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Aprobó iniciativa 17-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(2, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Publicó iniciativa 17-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(3, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Publicó iniciativa 14-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(4, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Aprobó iniciativa 14-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(5, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Publicó iniciativa 11-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(6, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Aprobó iniciativa 11-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(7, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó la publicación 2-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(8, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Publicó iniciativa 4-2023',
        color_icono: 'success',
        fecha: generarFechaAnterior(9, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
    ],
  },
  {
    titulo: 'Ayer',
    items: [
      {
        descripcion: 'Editó los permisos del rol PUBLICADOR',
        color_icono: 'success',
        fecha: generarFechaAnterior(20, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Editó los permisos del rol PUBLICADOR',
        color_icono: 'success',
        fecha: generarFechaAnterior(21, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 9773963',
        color_icono: 'success',
        fecha: generarFechaAnterior(22, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 3705929',
        color_icono: 'success',
        fecha: generarFechaAnterior(23, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 6893987',
        color_icono: 'success',
        fecha: generarFechaAnterior(24, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 2615828',
        color_icono: 'success',
        fecha: generarFechaAnterior(25, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 5116811',
        color_icono: 'success',
        fecha: generarFechaAnterior(26, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 4826317',
        color_icono: 'success',
        fecha: generarFechaAnterior(27, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 5388402',
        color_icono: 'success',
        fecha: generarFechaAnterior(28, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
      {
        descripcion: 'Creó al usuario 4185666',
        color_icono: 'success',
        fecha: generarFechaAnterior(29, 'hours', 'DD/MM/YYYY HH:mm:ss'),
      },
    ],
  },
]

export const Default = Template.bind({})
Default.storyName = 'Ejemplo de bitácora'
Default.args = {
  titulo: 'Últimas acciones',
  acciones: listaAcciones.map((acciones) => ({
    titulo: acciones.titulo,
    items: acciones.items.map((item) => ({
      descripcion: item.descripcion,
      fecha: formatoLiteral(stringToDate(item.fecha, 'DD/MM/YYYY HH:mm:ss')),
      color_icono: item.color_icono,
    })),
  })),
}

export const BitacoraConAcciones = Template.bind({})
BitacoraConAcciones.storyName = 'Bitácora con acciones'
BitacoraConAcciones.args = {
  titulo: 'Últimas acciones',
  acciones: listaAcciones.map((acciones) => ({
    titulo: acciones.titulo,
    items: acciones.items.map((item) => ({
      titulo: item.titulo,
      descripcion: item.descripcion,
      fecha: formatoLiteral(stringToDate(item.fecha, 'DD/MM/YYYY HH:mm:ss')),
      color_icono: item.color_icono,
    })),
  })),
}

export const BitacoraConIconos = Template.bind({})
BitacoraConIconos.storyName = 'Ejemplo de bitácora con íconos en timeline'
BitacoraConIconos.args = {
  titulo: 'Últimas acciones',
  acciones: listaAcciones.map((acciones) => ({
    titulo: acciones.titulo,
    items: acciones.items.map((item) => ({
      descripcion: item.descripcion,
      fecha: formatoLiteral(stringToDate(item.fecha, 'DD/MM/YYYY HH:mm:ss')),
      color_icono: item.color_icono,
      icono: item.icono,
    })),
  })),
}

const componente = (texto: string) => (
  <Grid>
    <Typography>{`Contenido de componente personalizable "${texto}"`}</Typography>
  </Grid>
)
export const BitacoraConComponentePersonalizable = Template.bind({})
BitacoraConComponentePersonalizable.storyName =
  'Ejemplo de bitácora con componente personalizable'
BitacoraConComponentePersonalizable.args = {
  titulo: 'Últimas acciones',
  acciones: listaAcciones.map((acciones) => ({
    titulo: acciones.titulo,
    items: acciones.items.map((item, index) => ({
      descripcion: item.descripcion,
      fecha: formatoLiteral(stringToDate(item.fecha, 'DD/MM/YYYY HH:mm:ss')),
      color_icono: item.color_icono,
      componente: componente(`${index}`),
    })),
  })),
}

export const BitacoraConAccionesPorTiempo = Template.bind({})
BitacoraConAccionesPorTiempo.storyName =
  'Ejemplo de bitácora de acciones agrupadas por tiempo'
BitacoraConAccionesPorTiempo.args = {
  titulo: 'Últimas acciones',
  acciones: listaAccionesPorTiempo.map((acciones) => ({
    titulo: acciones.titulo,
    items: acciones.items.map((item) => ({
      descripcion: item.descripcion,
      fecha: formatoLiteral(stringToDate(item.fecha, 'DD/MM/YYYY HH:mm:ss')),
      color_icono: item.color_icono,
    })),
  })),
}

export const BitacoraVacia = Template.bind({})
BitacoraVacia.storyName = 'Bitácora vacía'
BitacoraVacia.args = {
  titulo: 'Últimas acciones',
  acciones: [],
}
