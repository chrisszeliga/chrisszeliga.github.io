'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './styles/Footer.module.css'

export default function Footer() {
  const flakesRef = useRef<HTMLDivElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animations: gsap.core.Tween[] = []

    const createSnowfall = () => {
      animations.forEach(anim => anim.kill())
      animations.length = 0

      const width =
        containerRef.current?.offsetWidth || window.innerWidth

      const height =
        containerRef.current?.offsetHeight || window.innerHeight

      flakesRef.current.forEach((flake) => {
        if (!flake) return

        const startX = gsap.utils.random(0, width)
        const drift = gsap.utils.random(-20, 20)

        const tween = gsap.fromTo(
          flake,
          {
            x: startX,
            y: gsap.utils.random(-height, -50),
            scale: gsap.utils.random(0.3, 1),
            opacity: gsap.utils.random(0.3, 1),
            rotation: gsap.utils.random(0, 360),
          },
          {
            y: height + 50,
            x: startX + drift,
            rotation: `+=${gsap.utils.random(180, 360)}`,
            duration: gsap.utils.random(8, 15),
            repeat: -1,
            ease: 'none',
            repeatRefresh: false,
          }
        )

        animations.push(tween)
      })
    }

    createSnowfall()

    window.addEventListener('resize', createSnowfall)

    return () => {
      window.removeEventListener('resize', createSnowfall)
      animations.forEach(anim => anim.kill())
    }
  }, [])

  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.sticky}>
          <div ref={containerRef} className={styles.container}>
            <div className={styles.snow}>
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className={styles.flake}
                  ref={(el) => {
                    if (el) flakesRef.current[i] = el
                  }}
                />
              ))}
            </div>
            <nav className={styles.nav}>
              <h3 className={styles.navTitle}>Connect</h3>
              <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/chris-szeliga/'>
                LinkedIn
              </a>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/chrisszeliga'>
                Github
              </a>
              <a target='_blank' rel="noopener noreferrer" href='mailto:szeligachristopher@gmail.com'>
                Contact
              </a>
            </nav>
            <h1 className={styles.name}>Christopher Szeliga</h1>
          </div>
        </div>
      </div>
    </div>
  )
}