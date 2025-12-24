import styles from './styles/LBMCard.module.css'

export default function LBMCard() {
  return(
    <div className={styles.container}>
      <video 
        src="/videos/LBMSimulation.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div>
        <p>Some Text</p>
      </div>
    </div>
  )
}