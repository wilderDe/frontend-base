import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { UseFormSetValue } from 'react-hook-form/dist/types/form'
import React from 'react'

export interface multiOptionType {
  key: string
  value: string
  label: string
}

type FormInputMultiCheckboxProps<T extends FieldValues> = {
  id: string
  name: Path<T>
  control: Control<T, object>
  label: string
  setValue: UseFormSetValue<T>
  options: multiOptionType[]
  size?: 'small' | 'medium'
  rules?: RegisterOptions
  disabled?: boolean
}

export const FormInputMultiCheckbox = <T extends FieldValues>({
  id,
  name,
  control,
  setValue,
  label,
  size = 'small',
  options,
  rules,
  disabled,
}: FormInputMultiCheckboxProps<T>) => {
  return (
    <FormControl size={'small'} variant={'outlined'}>
      <FormLabel component="legend">{label}</FormLabel>
      <div>
        {options.map((option: multiOptionType) => (
          <FormControlLabel
            name={name}
            control={
              <Controller
                name={name}
                control={control}
                render={({ field }) => {
                  return (
                    <Checkbox
                      id={id}
                      size={size}
                      checked={field.value.includes(option.value)}
                      onChange={() => {
                        const isPresent = field.value.indexOf(option.value)
                        if (isPresent !== -1) {
                          const remaining = field.value.filter(
                            (item: string) => item !== option.value
                          )
                          setValue(name, remaining)
                        } else {
                          setValue(name, [
                            ...new Set([...field.value, option.value]),
                          ] as PathValue<T, Path<T>>)
                        }
                      }}
                    />
                  )
                }}
                rules={rules}
              />
            }
            disabled={disabled}
            label={option.label}
            key={option.value}
          />
        ))}
      </div>
    </FormControl>
  )
}
