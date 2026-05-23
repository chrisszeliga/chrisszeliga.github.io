'use client'
import Hero from './components/Hero'
import HorizontalScroll from './components/HorizontalSection'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Hero />
      <HorizontalScroll />
    </main>
  )
}