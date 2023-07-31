import { FC } from 'react'
import { ArchivoType } from '../form/FormInputFile'

interface PdfProp {
  archivo: ArchivoType | undefined | null
}

const PdfPreview: FC<PdfProp> = ({ archivo }) => {
  return (
    <>
      {archivo?.imgUrlLocal && (
        <iframe
          title={archivo.nombre}
          src={archivo.imgUrlLocal}
          width="100%"
          height="600px"
        />
      )}
    </>
  )
}

export default PdfPreview
