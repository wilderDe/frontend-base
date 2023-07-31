import { ArchivoType } from '../components/ui/form/FormInputImage'

export const filesToArray = (files: FileList): ArchivoType[] =>
  Array.from(files ?? []).map((file) => ({
    nombre: file.name,
    espacio: file.size,
    tipo: file.type,
    imgUrlLocal: URL.createObjectURL(file),
  }))

export const mergeFilesList = (files: FileList, nuevosFiles: FileList) => {
  const dt = new DataTransfer()

  for (const file of [
    ...Array.from(files ?? []),
    ...Array.from(nuevosFiles ?? []),
  ]) {
    dt.items.add(file)
  }

  return dt.files
}
