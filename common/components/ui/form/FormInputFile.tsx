import {
  Box,
  Card,
  CardActionArea,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { useEffect, useState } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import {
  CustomDialog,
  Icono,
  IconoTooltip,
} from '../../../../common/components/ui'
import { SubirArchivo } from '../archivos/SubirArchivo'
import { filesToArray, mergeFilesList } from '../../../utils'
import PdfPreview from '../preview/PdfPreview'

export interface ArchivoType {
  nombre: string
  tipo: string
  espacio: number
  imgUrlLocal: string
}

export interface FormInputFileProps<T extends FieldValues> {
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

interface CardFileProps {
  archivo: ArchivoType
  quitarArchivo: () => void
}

const FormInputFile = <T extends FieldValues>({
  id,
  name,
  control,
  limite = 1000,
  multiple = false,
  tiposPermitidos,
  label,
  labelVariant = 'subtitle2',
}: FormInputFileProps<T>) => {
  const [archivosCargados, setArchivosCargados] = useState<ArchivoType[]>([])

  const { field } = useController({ name, control })

  const [mostrarPDF, setMostrarPDF] = useState<boolean>(false)

  const [archivoEdicion, setArchivoEdicion] = useState<
    ArchivoType | undefined | null
  >()

  const cerrarModalPdf = () => {
    setMostrarPDF(false)
    setArchivoEdicion(null)
  }

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

    archivosCargados.splice(index, 1)

    for (const entrada of archivosCargados.entries()) {
      dt.items.add(field.value[entrada[0]])
    }

    field.onChange(dt.files)
    setArchivosCargados(archivosCargados)
  }

  const ContenidoCardFilePreview = ({
    archivo,
    icono,
    quitarArchivo,
  }: {
    archivo: ArchivoType
    icono: string
    quitarArchivo: () => void
  }) => (
    <Card
      variant={'outlined'}
      sx={{
        borderRadius: 3,
        height: 75,
        pl: 2,
        pr: 1,
        pt: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Icono fontSize="large">{icono}</Icono>
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
              variant="caption"
            >
              {archivo.nombre}
            </Typography>
            <Typography variant="caption" color={'text.secondary'}>
              {(archivo.espacio / 1000 / 1000).toFixed(2)} Mb
            </Typography>
          </Stack>
        </Stack>
        <IconoTooltip
          id={`id-quitar-archivo-${0}`}
          color="primary"
          titulo={'Quitar archivo'}
          key={`accionQuitarArchivo`}
          accion={(event) => {
            event.preventDefault()
            event.stopPropagation()
            quitarArchivo()
          }}
          icono={'cancel'}
          name={'Quitar Archivo'}
        />
      </Stack>
    </Card>
  )

  const CardFilePreview = ({ archivo, quitarArchivo }: CardFileProps) => {
    return archivo.tipo == 'application/pdf' ? (
      <CardActionArea
        component="span"
        onClick={() => {
          setArchivoEdicion(archivo)
          setMostrarPDF(true)
        }}
      >
        {ContenidoCardFilePreview({
          archivo: archivo,
          icono: 'picture_as_pdf',
          quitarArchivo: quitarArchivo,
        })}
      </CardActionArea>
    ) : (
      ContenidoCardFilePreview({
        archivo: archivo,
        icono: 'description',
        quitarArchivo: quitarArchivo,
      })
    )
  }

  useEffect(() => {
    if (field.value) {
      // para cargar archivos existentes
      setArchivosCargados(filesToArray(field.value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <CustomDialog isOpen={mostrarPDF} handleClose={cerrarModalPdf}>
        <PdfPreview archivo={archivoEdicion} />
      </CustomDialog>
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
              padding: 2.3,
              borderRadius: 3,
              bgcolor: 'background.paper',
            }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <CardFilePreview
              archivo={archivosCargados[0]}
              quitarArchivo={() => {
                quitarArchivo(0)
              }}
            />
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
          <Box>
            <Grid container spacing={1}>
              {archivosCargados.map((archivo, index) => (
                <Grid key={`archivo-${index}`} item xs={12} sm={6} md={6}>
                  <CardFilePreview
                    archivo={archivo}
                    quitarArchivo={() => {
                      quitarArchivo(index)
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  )
}
export default FormInputFile
