import React from 'react'

// STYLES
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Next Website
      </h1>
    </header>
  )
}
