import { forwardRef, ReactElement, Ref } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import { Slide, Zoom } from '@mui/material'

export const TransitionSlide = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return (
    <Slide direction={'up'} ref={ref} {...props}>
      {props.children}
    </Slide>
  )
})

export const TransitionZoom = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return (
    <Zoom ref={ref} {...props}>
      {props.children}
    </Zoom>
  )
})
