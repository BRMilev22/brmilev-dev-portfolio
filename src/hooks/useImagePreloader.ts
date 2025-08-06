'use client'

import { useEffect, useState } from 'react'

export const useImagePreloader = (imageUrls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false)
      return
    }

    let loadedCount = 0
    const totalImages = imageUrls.length

    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image()
        
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(url))
          loadedCount++
          if (loadedCount === totalImages) {
            setIsLoading(false)
          }
          resolve()
        }
        
        img.onerror = () => {
          console.warn(`Failed to preload image: ${url}`)
          loadedCount++
          if (loadedCount === totalImages) {
            setIsLoading(false)
          }
          resolve()
        }
        
        img.src = url
      })
    }

    // Preload all images concurrently
    Promise.all(imageUrls.map(preloadImage))

    return () => {
      setLoadedImages(new Set())
      setIsLoading(true)
    }
  }, [imageUrls])

  return { loadedImages, isLoading }
}

export default useImagePreloader