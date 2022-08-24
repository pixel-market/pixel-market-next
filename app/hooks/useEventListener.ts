import throttle from 'lodash.throttle'
import { useEffect, useRef } from 'react'

import { isSSR } from 'utils/constants/app'

export const useEventListener = (
  eventName: string,
  callback: any,
  element: any = null,
  throttleTime = 100,
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (isSSR) return
    const currentElement = element || window
    const handler = throttle((e: any) => callbackRef.current(e), throttleTime)
    currentElement.addEventListener(eventName, handler)

    return () => currentElement.removeEventListener(eventName, handler)
  }, [eventName, element, throttleTime])
}
