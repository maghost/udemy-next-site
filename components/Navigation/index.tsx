import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// TYPES
import { NavAnchorProps } from './types'

// STYLES
import styles from './Navigation.module.css'

const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

function NavAnchor({ path, children }: NavAnchorProps) {
  return (
    <Link href={path}>
      <a className={styles.navAnchor}>
        {children}
      </a>
    </Link>
  )
}

export default function Navigation() {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path }) => (
          <li key={path}>
            {path === pathname
              ? <span>{name}</span>
              : <NavAnchor path={path}>{name}</NavAnchor>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}
