import { FormHelperText, InputLabel } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Variant } from '@mui/material/styles/createTypography'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import Tiptap from './TipTap'

type FormInputWysiwygProps<T extends FieldValues> = {
  id: string
  name: Path<T>
  control: Control<T, object>
  label: string
  textoAyuda?: string
  rules?: RegisterOptions
  editable?: boolean
  onChange?: (contenido: string) => void
  labelVariant?: Variant
  placeholder?: string
  mostrarOpcionesFormatoTexto?: boolean
  mostrarOpcionesAlineacion?: boolean
  mostrarOpcionesLista?: boolean
  mostrarOpcionesURL?: boolean
  mostrarOpcionesTabla?: boolean
  mostrarOpcionesHistorial?: boolean
}

export const FormInputWysiwyg = <T extends FieldValues>({
  id,
  name,
  control,
  label,
  rules,
  labelVariant = 'subtitle2',
  placeholder = '',
  editable = true,
  onChange,
  mostrarOpcionesFormatoTexto,
  mostrarOpcionesAlineacion,
  mostrarOpcionesLista,
  mostrarOpcionesURL,
  mostrarOpcionesTabla,
  mostrarOpcionesHistorial,
}: FormInputWysiwygProps<T>) => {
  return (
    <div>
      <InputLabel htmlFor={id}>
        <Typography
          variant={labelVariant}
          sx={{ pb: 1, fontWeight: 'fontWeightMedium', color: 'text.primary' }}
        >
          {label}
        </Typography>
      </InputLabel>

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Tiptap
              editable={editable}
              contenido={field.value}
              placeholder={placeholder}
              mostrarOpcionesFormatoTexto={mostrarOpcionesFormatoTexto}
              mostrarOpcionesAlineacion={mostrarOpcionesAlineacion}
              mostrarOpcionesLista={mostrarOpcionesLista}
              mostrarOpcionesURL={mostrarOpcionesURL}
              mostrarOpcionesTabla={mostrarOpcionesTabla}
              mostrarOpcionesHistorial={mostrarOpcionesHistorial}
              onChange={(content: string) => {
                if (content) {
                  if (onChange) {
                    onChange(content)
                  }
                  field.onChange(content)
                }
              }}
            />

            {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
          </>
        )}
        rules={{
          pattern: {
            value: /[^-\s]/,
            message: 'Formato incorrecto, no se permite espacios en blanco',
          },
          ...rules,
        }}
        defaultValue={'' as PathValue<T, Path<T>>}
      />
    </div>
  )
}
