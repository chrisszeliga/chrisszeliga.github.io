import styles from './styles/LBMCard.module.css'

export default function LBMCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <video
          src="/videos/LBMSimulation.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>2D LATTICE BOLTZMANN METHOD SIMULATION</h1>
        <div className={styles.subtitleRow}>
          <p className={styles.subtitle}>FOR COMPUTIONAL<br />FLUID DYNAMICS</p>
          <h2 className={styles.speedup}>SPEEDUP</h2>
        </div>
        <p className={styles.description}>I developed and optimized a C++ Lattice Boltzmann Method (LBM) fluid simulation focused on high-performance computing and parallel processing. I used OpenMP to parallelize the most compute-heavy parts of the code, achieving up to a 7.8× speedup with 8 threads. I also scaled the simulation across multiple machines using MPI on Argonne National Laboratory’s Crux supercomputer and UIC’s Lakeshore HPC cluster, reaching a 3.3× speedup on 4 nodes. To handle communication between distributed parts of the simulation, I implemented a ghost row technique to exchange boundary data between neighboring nodes at each timestep. I also used Python, Pandas, and Matplotlib to visualize the results and analyze how the simulation performed and scaled.</p>
        <img src="/images/LBM-speedup.png" alt="LBM Speedup" className={styles.image}></img>
      </div>
    </div>
  )
}