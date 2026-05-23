import styles from './styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.sticky}>
          <div className={styles.container}>
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