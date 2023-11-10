import React, { FC } from 'react'
import { navItems } from './constant'
import styles from './styles.module.scss'

const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <span>me</span>
      </div>
      <ul className={styles.horizontal}>
        {navItems.map(nav => (
          <li key={nav.toEl}>{nav.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
