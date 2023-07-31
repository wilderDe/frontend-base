import randomWords from 'random-words'

export const palabraAleatoria = (exactly = 1, min = 3) => {
  return randomWords({ exactly: exactly, min: min }).pop() ?? ''
}

export const numeroAleatorio = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min
