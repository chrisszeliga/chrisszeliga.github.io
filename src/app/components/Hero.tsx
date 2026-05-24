'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './styles/Hero.module.css'
import Header from './Header'

export default function Hero() {
  const flakesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const animations: gsap.core.Tween[] = []

    const createSnowfall = () => {
      // Kill any existing animations first
      animations.forEach((anim) => anim.kill())
      animations.length = 0

      const totalWidth = window.innerWidth
      const vh = window.innerHeight
      const totalHeight = vh * 1.07  // vh + 7vh

      flakesRef.current.forEach((flake) => {
        if (!flake) return

        const startX = gsap.utils.random(45, totalWidth - 45) // Keep away from edges
        const drift = gsap.utils.random(-20, 20)      // Drift

        const tween = gsap.fromTo(
          flake,
          {
            x: startX,
            y: gsap.utils.random(-totalHeight, -50), // Stagger initial Y positions
            scale: gsap.utils.random(0.3, 1),
            opacity: gsap.utils.random(0.3, 1),
            rotation: gsap.utils.random(0, 360)
          },
          {
            y: totalHeight + 50,
            x: startX + drift, // Absolute position to prevent overflow
            rotation: `+=${gsap.utils.random(180, 360)}`,
            duration: gsap.utils.random(8, 15),
            repeat: -1,
            ease: 'none',
            repeatRefresh: true
          }
        )
        animations.push(tween)
      })
    }
    createSnowfall()

    // On window resize kill all snow and restart
    const handleResize = () => {
      createSnowfall()
    }
    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      animations.forEach((anim) => anim.kill())
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.snow}>
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className={styles.flake}
              ref={(el) => {
                if (el) flakesRef.current[i] = el
              }}
            />
          ))}
        </div>

        <div className={styles.body}>
          <p>
            <span className={styles.initial}>C</span>HRISTOPHER <span className={styles.initial}>S</span>ZELIGA
          </p>
          <p>BACKEND SOFTWARE</p>
          <p>ENGINEER @ <img src="/images/IBM-logo.png" alt="IBM" className={styles.ibmLogo} /></p>
          <p>z/OS DEEP LEARNING COMPILER</p>
        </div>
      </section>
    </div>
  )
}