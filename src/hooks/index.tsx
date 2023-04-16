import { useRef, useImperativeHandle, ForwardedRef } from 'react'

export function useScrollIntoViewRef(ref: ForwardedRef<any>) {
  const localRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        localRef.current.scrollIntoView({ behavior: 'smooth' })
      },
    }
  })

  return localRef
}
