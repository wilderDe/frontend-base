import { ReactNode, useEffect, useRef } from 'react'

interface iFrameProps {
  height: string
  color?: string
  children: ReactNode
  padding?: string
  border?: string
}

export const CustomFrame = ({
  height,
  color = '#C5C1BC',
  padding = '0px',
  border = 'none',
  children,
}: iFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const insertar = () => {
    const iframe = iframeRef.current

    const iframeDocument = iframe?.contentDocument

    if (!iframeDocument) {
      return
    }

    const stylesheets = Array.from(document.styleSheets)

    for (const stylesheet of stylesheets) {
      const newStylesheet = iframeDocument.createElement('style')
      if (newStylesheet) {
        newStylesheet.innerHTML = Array.from(stylesheet.cssRules)
          .map((rule) => rule.cssText)
          .join('\n')
        iframeDocument.head.appendChild(newStylesheet)
      }
    }

    const componente = document.getElementById('componente')

    iframeDocument.body.innerHTML = '<div></div>'

    if (componente) {
      iframeDocument.body.appendChild(componente)
    }
  }
  useEffect(() => {
    insertar()
  }, [])
  return (
    <div style={{ border: border, padding: padding, background: color }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: height,
        }}
      >
        <iframe
          // src={'/'}
          id="vec"
          ref={iframeRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            boxShadow: 'none',
            border: 'none',
          }}
        ></iframe>
      </div>
      <div id={'componente'}>{children}</div>
    </div>
  )
}
