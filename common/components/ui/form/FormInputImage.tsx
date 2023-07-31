import {
  Box,
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { useEffect, useState } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { IconoTooltip } from '../botones/IconoTooltip'
import ImagenPreview from '../preview/ImagenPreview'
import { SubirArchivo } from '../archivos/SubirArchivo'
import { filesToArray, mergeFilesList } from '../../../utils'

export interface ArchivoType {
  nombre: string
  tipo: string
  espacio: number
  imgUrlLocal: string
}

export interface FormInputImageProps<T extends FieldValues> {
  id: string
  index?: number
  name: Path<T>
  control: Control<T, object>
  tiposPermitidos?: Array<string>
  limite?: number
  multiple?: boolean
  label: string
  labelVariant?: Variant
}

const FormInputImage = <T extends FieldValues>({
  id,
  name,
  control,
  limite = 1000,
  multiple = false,
  tiposPermitidos = ['png', 'jpg', 'jpeg', 'svg'],
  label,
  labelVariant = 'subtitle2',
}: FormInputImageProps<T>) => {
  const [archivosCargados, setArchivosCargados] = useState<ArchivoType[]>([])
  const { field } = useController({ name, control })
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  // para adicionar nuevo archivo a cargar
  const agregarArchivos = (files: FileList) => {
    // setEnviarArchivos(listaArchivos)

    const auxFiles = cantidadLimite(mergeFilesList(field.value, files))

    field.onChange(auxFiles)
    setArchivosCargados(filesToArray(auxFiles))
  }

  // convertir el objeto Files(e.target.files) a un array

  const cantidadLimite = (files: FileList) => {
    const cantidadLimite = multiple ? limite : 1

    const dt = new DataTransfer()

    for (const file of Array.from(files ?? []).slice(0, cantidadLimite)) {
      dt.items.add(file)
    }

    return dt.files
  }

  const quitarArchivo = (index: number) => {
    const dt = new DataTransfer()
    const auxLista = archivosCargados.filter((arr, i) => {
      if (i == index) {
        return false
      }
      dt.items.add(field.value[i])
      return true
    })
    field.onChange(dt.files)
    setArchivosCargados(auxLista)
  }

  useEffect(() => {
    if (field.value) {
      // para cargar archivos existentes
      setArchivosCargados(filesToArray(field.value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box id={id}>
      <InputLabel htmlFor={id}>
        <Typography variant={labelVariant} sx={{ color: 'text.primary' }}>
          {label}
        </Typography>
      </InputLabel>
      {!multiple && archivosCargados.length == 1 ? (
        <Box
          sx={{
            mt: 1,
            mb: 1,
            border: '1px dashed #ABAFB3',
            padding: 2,
            borderRadius: 3,
            bgcolor: 'background.paper',
          }}
          // display={'flex'}
          // flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Card
            variant={'outlined'}
            sx={{
              borderRadius: 3,
              p: 2,
            }}
          >
            <Stack
              direction="row"
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} spacing={2} alignItems={'flex-start'}>
                <Box width={80} height={80}>
                  <ImagenPreview
                    width={'100'}
                    height={'100'}
                    alt={`${archivosCargados[0].nombre}`}
                    src={`${archivosCargados[0].imgUrlLocal}`}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Stack direction={'column'} sx={{ display: 'grid' }}>
                  <Typography
                    sx={{
                      width: '100%',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: `${1}`,
                    }}
                    variant="inherit"
                  >
                    {archivosCargados[0].nombre}
                  </Typography>
                  <Typography variant="caption" color={'text.secondary'}>
                    {(archivosCargados[0].espacio / 1000 / 1000).toFixed(2)} Mb
                  </Typography>
                </Stack>
              </Stack>
              <IconoTooltip
                id={`id-quitar-archivo-${0}`}
                color="primary"
                titulo={'Quitar archivo'}
                key={`accionQuitarArchivo`}
                accion={() => {
                  quitarArchivo(0)
                }}
                icono={'cancel'}
                name={'Quitar Archivo'}
              />
            </Stack>
          </Card>
        </Box>
      ) : (
        <SubirArchivo
          multiple={multiple}
          tiposPermitidos={tiposPermitidos}
          handleChange={(files: FileList) => {
            agregarArchivos(files)
          }}
        />
      )}

      {multiple && (
        <ImageList
          // variant="masonry"
          cols={xs ? 2 : 3}
        >
          {archivosCargados.map((item, index) => (
            <ImageListItem key={item.imgUrlLocal}>
              <ImagenPreview
                width={'200'}
                height={'200'}
                alt={`${item.nombre}`}
                src={`${item.imgUrlLocal}`}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position="top"
                title={item.nombre}
                subtitle={`${(item.espacio / 1000000).toFixed(2)} Mb`}
                actionPosition="right"
                actionIcon={
                  <Box component="span" sx={{ p: 1 }}>
                    <IconoTooltip
                      id={`id-quitar-archivo-${index}`}
                      color="error"
                      titulo={'Quitar archivo'}
                      key={`accionQuitarArchivo`}
                      accion={() => {
                        quitarArchivo(index)
                      }}
                      icono={'remove_circle'}
                      name={'Quitar Archivo'}
                    />
                  </Box>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  )
}
export default FormInputImage
