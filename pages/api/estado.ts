// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { nombreRama, commitID, commitDate } from '../../common/utils'

type Data = {
  estado: string
  hora: number
  b: any
  cid: any
  cd: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    estado: `Servicio funcionando correctamente 🙌`,
    hora: new Date().getTime(),
    b: await nombreRama(),
    cid: await commitID(),
    cd: await commitDate(),
  })
}
