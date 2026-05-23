'use client'
import { useEffect } from 'react'

export default function FaviconSwitcher() {
  useEffect(() => {
    const hour = new Date().getHours()
    const isDay = hour >= 6 && hour < 20

    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      || document.createElement('link')
    link.rel = 'icon'
    link.href = isDay ? '/images/sun.png' : '/images/moon.png'
    document.head.appendChild(link)
  }, [])

  return null
}