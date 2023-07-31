import childProcess from 'child_process'
import { Constantes } from '../../config'
import { IZXCVBNResult } from 'zxcvbn-typescript'
import packageJson from '../../package.json'

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const encodeBase64 = (data: string) => {
  return Buffer.from(data).toString('base64')
}
export const decodeBase64 = (data: string) => {
  return Buffer.from(data, 'base64').toString('ascii')
}

export const titleCase = (word: string) => {
  return word.length <= 1
    ? word.toUpperCase()
    : word
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export const execChildProcess = async (comando: string) => {
  const childProcess = require('child_process')
  return await new Promise((resolve, reject) => {
    childProcess.exec(
      comando,
      (error: childProcess.ExecException, stdout: string, stderr: string) => {
        return error ? reject(stderr) : resolve(stdout)
      }
    )
  })
}

export const versionNumber = () => {
  return packageJson.version
}

export const siteName = () => {
  return Constantes.siteName ?? ''
}

export const seguridadPass = async (pass: string): Promise<IZXCVBNResult> => {
  const zxcvbnLib = (await import('zxcvbn-typescript')).default
  return zxcvbnLib(pass)
}
