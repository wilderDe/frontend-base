import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
  FormHelperText,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import esMX from 'dayjs/locale/es-mx'
import { validarFechaFormato } from '../../../utils/fechas'
import { Variant } from '@mui/material/styles/createTypography'
import { Dayjs } from 'dayjs'

type FormDatePickerProps<T extends FieldValues> = {
  id: string
  name: Path<T>
  control: Control<T, object>
  label: string
  size?: 'small' | 'medium'
  format?: string
  disabled?: boolean
  rules?: RegisterOptions
  bgcolor?: string
  minDate?: Dayjs
  maxDate?: Dayjs
  labelVariant?: Variant
  desktopModeMediaQuery?: string
}

export const FormInputDate = <T extends FieldValues>({
  id,
  name,
  control,
  label,
  size = 'small',
  format = 'DD/MM/YYYY',
  disabled,
  rules,
  bgcolor,
  minDate,
  maxDate,
  labelVariant = 'subtitle2',
  desktopModeMediaQuery = '',
}: FormDatePickerProps<T>) => {
  return (
    <div>
      <InputLabel htmlFor={id}>
        <Typography
          variant={labelVariant}
          sx={{ fontWeight: 'fontWeightMedium', color: 'text.primary' }}
        >
          {label}
        </Typography>
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={esMX}>
            <DatePicker
              onChange={field.onChange}
              value={field.value}
              ref={field.ref}
              mask={'__/__/____'}
              inputFormat={format}
              minDate={minDate}
              maxDate={maxDate}
              disabled={disabled}
              desktopModeMediaQuery={desktopModeMediaQuery}
              renderInput={(params) => (
                <>
                  <TextField
                    id={id}
                    name={name}
                    sx={{ width: '100%', bgcolor: bgcolor }}
                    size={size}
                    {...params}
                    error={!!error}
                  />
                  {!!error && (
                    <FormHelperText error>{error?.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </LocalizationProvider>
        )}
        rules={{
          ...{
            validate: (val?: string) => {
              if (val && !validarFechaFormato(val, format)) {
                return 'La fecha no es válida'
              }
            },
          },
          ...rules,
        }}
        defaultValue={'' as PathValue<T, Path<T>>}
      />
    </div>
  )
}
