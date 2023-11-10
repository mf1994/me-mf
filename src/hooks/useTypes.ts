import { useEffect, useRef } from 'react'
import Typed, { TypedOptions } from 'typed.js'

const useTypes = (strings: string[], extra?: TypedOptions) => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 200,
      backSpeed: 60,
      ...extra,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return el
}

export default useTypes
