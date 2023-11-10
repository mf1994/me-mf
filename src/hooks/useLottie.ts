import { useEffect, useRef } from 'react'
import lottie, { AnimationConfigWithData } from 'lottie-web'

const useLottie = (path: string, extra?: AnimationConfigWithData) => {
  const lottieRef = useRef(null)
  useEffect(() => {
    if (lottieRef.current) {
      const item = lottie.loadAnimation({
        container: lottieRef.current,
        path,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        ...extra,
      })

      return () => {
        item.destroy()
      }
    }
  }, [])
  return lottieRef
}

export default useLottie
