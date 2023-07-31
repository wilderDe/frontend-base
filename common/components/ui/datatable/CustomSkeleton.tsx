import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'

export interface ListSkeletonType {
  filas: number
}

export const ListSkeleton = ({ filas }: ListSkeletonType) => {
  return (
    <>
      {Array(filas)
        .fill(0)
        .map((e, i) => (
          <Skeleton key={`$skeleton-${i}`} height={'120px'} />
        ))}
    </>
  )
}

export interface TableSkeletonType {
  filas: number
  columnas: number
}

export const TableSkeleton = ({ filas, columnas }: TableSkeletonType) => {
  return (
    <>
      <TableContainer sx={{ pt: 2 }}>
        <Table>
          <TableSkeletonBody columnas={columnas} filas={filas} />
        </Table>
      </TableContainer>
    </>
  )
}

export const TableSkeletonBody = ({ filas, columnas }: TableSkeletonType) => {
  return (
    <>
      <TableBody>
        {Array(filas)
          .fill(0)
          .map((e, fila) => (
            <TableRow
              key={`skeleton-row-${fila}`}
              sx={{ '& > *': { borderBottom: 'unset' } }}
            >
              {Array(columnas)
                .fill(0)
                .map((e, columna) => (
                  <TableCell key={`skeleton-cell-${columna}`}>
                    <Skeleton
                      key={`$skeleton-${fila}-${columna}`}
                      variant={'text'}
                      height={'30px'}
                      animation={'wave'}
                    />
                  </TableCell>
                ))}
            </TableRow>
          ))}
      </TableBody>
    </>
  )
}
