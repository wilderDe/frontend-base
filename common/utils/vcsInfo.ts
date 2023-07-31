import { execChildProcess } from './utilidades'

export const nombreRama = async () => {
  return await new Promise((resolve) => {
    execChildProcess(`git rev-parse --abbrev-ref HEAD`)
      .then((data) => {
        resolve(data)
      })
      .catch(() => {
        resolve('sin VCS')
      })
  })
}

export const commitID = async () => {
  return await new Promise((resolve) => {
    execChildProcess(`git log --format="%H" -n 1`)
      .then((data) => {
        resolve(data)
      })
      .catch(() => {
        resolve('sin VCS')
      })
  })
}

export const commitDate = async () => {
  return await new Promise((resolve) => {
    execChildProcess(`git log -1 --format=%cd`)
      .then((data) => {
        resolve(data)
      })
      .catch(() => {
        resolve('sin VCS')
      })
  })
}
