"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from './styles/HorizontalSection.module.css'
import TACard from "./cards/TACard"
import LBMCard from "./cards/LBMCard"

export default function HorizontalSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-180vw", // current vw - total vw ==> 100 vw - (four 70vw sections)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2400 top",    // value is how much scroll is needed
          scrub: 0.6,
          pin: true,
        },
      }
    );
    // A return function for killing the animation on component unmount
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollsection}>
          <TACard />
          <LBMCard />

          <div className={styles.card}>
            <h3>Section 4</h3>
          </div>
          
        </div>
      </div>
    </section>
  )
}