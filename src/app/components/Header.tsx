import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles['header']}>
      <p>Christopher Szeliga</p>
      <div className={styles['nav']}>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/chrisszeliga'>
          Github
        </a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/chris-szeliga/'>
          LinkedIn
        </a>
        <a target='_blank' rel="noopener noreferrer" href='mailto:szeligachristopher@gmail.com'>
          Contact
        </a>
      </div>
    </div>
  )
}