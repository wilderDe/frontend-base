import { Constantes } from '../../../../config'

export default function DebugBanner() {
  const entorno = Constantes.appEnv

  let mensaje = undefined
  switch (entorno) {
    case 'development':
      mensaje = 'DEV'
      break
    case 'test':
      mensaje = 'TEST'
      break
    case 'production':
      mensaje = 'PROD'
      break
  }
  if (entorno == 'production') {
    return null
  }
  return (
    <div
      style={{
        background: '#B71C1C',
        position: 'fixed',
        color: 'white',
        transform: 'rotate(-45deg)',
        fontFamily: 'system-ui, serif',
        fontWeight: 'bold',
        width: '100px',
        textAlign: 'center',
        right: '-23px',
        bottom: '15px',
        zIndex: 9999,
      }}
    >
      {mensaje ?? entorno}
    </div>
  )
}
