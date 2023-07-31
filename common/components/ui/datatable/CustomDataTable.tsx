import React, { ReactNode, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Fade,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ListSkeleton, TableSkeletonBody } from './CustomSkeleton'
import { Icono } from '../Icono'
import { CriterioOrdenType } from '../../../types/ordenTypes'
import { ToggleOrden } from '../../../utils/orden'

export interface CustomDataTableType {
  titulo?: string
  error?: boolean
  cargando?: boolean
  acciones?: Array<ReactNode>
  cambioOrdenCriterios?: (nuevosCriterios: Array<CriterioOrdenType>) => void
  columnas: Array<CriterioOrdenType>
  filtros?: ReactNode
  contenidoTabla: Array<Array<ReactNode>>
  paginacion?: ReactNode
  seleccionable?: boolean
  seleccionados?: (indices: Array<number>) => void
}

export const CustomDataTable = ({
  titulo,
  error = false,
  cargando = false,
  acciones = [],
  columnas,
  cambioOrdenCriterios,
  filtros,
  contenidoTabla,
  paginacion,
  seleccionable,
  seleccionados,
}: CustomDataTableType) => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const [todoSeleccionado, setTodoSeleccionado] = useState(false)

  const cambiarTodoSeleccionado = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoSeleccionado(event.target.checked)
  }

  const [indicesSeleccionados, setIndicesSeleccionados] = useState<
    Array<boolean>
  >([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.name)
    setIndicesSeleccionados((prev) => {
      const newState = [...prev]
      newState[index] = event.target.checked
      return newState
    })
  }

  useEffect(
    () => {
      if (seleccionados) {
        seleccionados(
          indicesSeleccionados.reduce(
            (resulltado: Array<number>, value, index) => {
              if (value) {
                resulltado.push(index)
              }
              return resulltado
            },
            []
          )
        )
      }

      if (
        indicesSeleccionados.filter((value) => value).length ==
        indicesSeleccionados.length
      )
        setTodoSeleccionado(true)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(indicesSeleccionados)]
  )

  useEffect(
    () => {
      setIndicesSeleccionados(
        new Array(contenidoTabla.length).fill(todoSeleccionado)
      )
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [todoSeleccionado]
  )

  useEffect(
    () => {
      if (!cargando) {
        setIndicesSeleccionados(new Array(contenidoTabla.length).fill(false))
        setTodoSeleccionado(false)
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [cargando, contenidoTabla.length]
  )

  return (
    <Box sx={{ pb: 2 }}>
      {/*título y acciones*/}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {titulo ? (
          <Typography variant={'h5'} sx={{ fontWeight: 'medium', pl: 1 }}>
            {`${titulo}`}
          </Typography>
        ) : (
          <Box />
        )}
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {seleccionable &&
              indicesSeleccionados.filter((value) => value).length > 0 && (
                <Box sx={{ mx: 1 }}>
                  <Typography key={'contador'} variant={'subtitle2'}>
                    {`${
                      indicesSeleccionados.filter((value) => value).length
                    } seleccionados`}
                  </Typography>
                </Box>
              )}
            {acciones.map((accion, index) => (
              <div key={`accion-id-${index}`}>{accion}</div>
            ))}
          </Grid>
        </Box>
      </Grid>
      {/* filtros */}
      <Box
        sx={{
          pt: filtros ? 1 : 2,
          pb: filtros ? 3 : 1,
        }}
      >
        {filtros}
      </Box>
      {/*Contenedor de la tabla*/}
      <Card
        sx={{
          borderRadius: 2,
          pt: 0,
          pl: { sm: 3, md: 3, xl: 3 },
          pr: { sm: 3, md: 3, xl: 3 },
          pb: { sm: 2, md: 2, xl: 2 },
          mb: { sm: 3, md: 3, xl: 3 },
          backgroundColor: xs
            ? {
                sm: 'inherit',
                xs: 'inherit',
              }
            : {},
        }}
      >
        {
          <Box>
            {error ? (
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell />
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          justifyItems={'center'}
                        >
                          <Grid item xs={3} xl={4}>
                            <Typography
                              variant={'body1'}
                              component="h1"
                              noWrap={true}
                              alignItems={'center'}
                            >
                              {`Error obteniendo información`}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            ) : contenidoTabla.length == 0 && !cargando ? (
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell />
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          justifyItems={'center'}
                        >
                          <Grid item xs={3} xl={4}>
                            <Typography
                              variant={'body1'}
                              component="h1"
                              noWrap={true}
                              alignItems={'center'}
                            >
                              {`Sin registros`}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box>
                {xs ? (
                  cargando ? (
                    <ListSkeleton filas={10} />
                  ) : (
                    <div>
                      {contenidoTabla.map((contenidoFila, index) => (
                        <Card // en lugar de CardActionArea para no usar hover en movil
                          sx={{
                            borderRadius: 3,
                            mb: 2,
                          }}
                          key={`row-id-${index}`}
                        >
                          <Card
                            key={`celda-id-${index}`}
                            sx={{
                              borderRadius: 3,
                            }}
                          >
                            <CardContent sx={{ '&:last-child': { pb: 1 } }}>
                              {seleccionable && (
                                <Grid
                                  key={`Grid-id-${index}-seleccionar`}
                                  container
                                  direction="row"
                                  paddingBottom={'0px'}
                                  justifyContent="space-between"
                                  alignItems="center"
                                >
                                  <Typography
                                    color="text.secondary"
                                    variant={'subtitle2'}
                                  >
                                    {'Seleccionar'}
                                  </Typography>
                                  {indicesSeleccionados.length > index && (
                                    <Checkbox
                                      checked={indicesSeleccionados[index]}
                                      onChange={handleChange}
                                      name={`${index}`}
                                    />
                                  )}
                                </Grid>
                              )}
                              {contenidoFila.map(
                                (contenido, indexContenido) => (
                                  <Grid
                                    key={`Grid-id-${index}-${indexContenido}`}
                                    container
                                    direction="row"
                                    paddingTop={'5px'}
                                    paddingBottom={'0px'}
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Typography
                                      color="text.secondary"
                                      variant={'subtitle2'}
                                    >
                                      {columnas[indexContenido].nombre}
                                    </Typography>
                                    {contenido}
                                  </Grid>
                                )
                              )}
                            </CardContent>
                          </Card>
                        </Card>
                      ))}
                    </div>
                  )
                ) : (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {seleccionable && (
                            <TableCell key={`cabecera-id-seleccionar`}>
                              <Checkbox
                                checked={todoSeleccionado}
                                disabled={cargando}
                                onChange={cambiarTodoSeleccionado}
                                indeterminate={
                                  indicesSeleccionados.filter((value) => value)
                                    .length != indicesSeleccionados.length &&
                                  indicesSeleccionados.filter((value) => value)
                                    .length > 0
                                }
                              />
                            </TableCell>
                          )}
                          {columnas.map((columna, index) => (
                            <TableCell key={`cabecera-id-${index}`}>
                              {columna.ordenar ? (
                                <Button
                                  disabled={cargando}
                                  style={{
                                    justifyContent: 'flex-start',
                                    minWidth: '0',
                                    padding: '0 1',
                                  }}
                                  onClick={() => {
                                    const nuevosCriterios = [...columnas] // crea una copia del array original

                                    if (cambioOrdenCriterios) {
                                      cambioOrdenCriterios(
                                        nuevosCriterios.map(
                                          (value, indice) => ({
                                            ...value,
                                            ...{
                                              orden:
                                                index == indice
                                                  ? ToggleOrden(value.orden)
                                                  : undefined,
                                            },
                                          })
                                        )
                                      )
                                    }
                                  }}
                                >
                                  <Typography
                                    variant={'caption'}
                                    color="text.primary"
                                    fontWeight={'medium'}
                                    align={'left'}
                                  >
                                    {columna.nombre}
                                  </Typography>
                                  {columna.orden && <Box width={'10px'} />}
                                  {columna.orden && (
                                    <Icono
                                      fontSize={'inherit'}
                                      color={'secondary'}
                                    >
                                      {columna.orden == 'asc'
                                        ? 'north'
                                        : 'south'}
                                    </Icono>
                                  )}
                                </Button>
                              ) : (
                                <Typography
                                  variant={'caption'}
                                  color="text.primary"
                                  fontWeight={'medium'}
                                  align={'left'}
                                >
                                  {columna.nombre}
                                </Typography>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      {cargando ? (
                        <TableSkeletonBody
                          filas={10}
                          columnas={columnas.length + (seleccionable ? 1 : 0)}
                        />
                      ) : (
                        <TableBody>
                          {contenidoTabla.map(
                            (contenidoFila, indexContenidoTabla) => (
                              <TableRow
                                key={`row-id-${indexContenidoTabla}`}
                                hover={true}
                              >
                                {seleccionable && (
                                  <TableCell
                                    key={`row-id-seleccionar-${indexContenidoTabla}`}
                                  >
                                    <Fade in={!cargando} timeout={1000}>
                                      <Box>
                                        {indicesSeleccionados.length >
                                          indexContenidoTabla && (
                                          <Checkbox
                                            checked={
                                              indicesSeleccionados[
                                                indexContenidoTabla
                                              ]
                                            }
                                            onChange={handleChange}
                                            name={`${indexContenidoTabla}`}
                                          />
                                        )}
                                      </Box>
                                    </Fade>
                                  </TableCell>
                                )}
                                {contenidoFila.map(
                                  (contenido, indexContenidoFila) => (
                                    <TableCell
                                      key={`celda-id-${indexContenidoTabla}-${indexContenidoFila}`}
                                    >
                                      <Fade in={!cargando} timeout={1000}>
                                        <Box>{contenido}</Box>
                                      </Fade>
                                    </TableCell>
                                  )
                                )}
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      )}
                    </Table>
                  </TableContainer>
                )}
                {paginacion}
              </Box>
            )}
          </Box>
        }
      </Card>
    </Box>
  )
}
