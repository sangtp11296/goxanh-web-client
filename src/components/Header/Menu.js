import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export const Menu = () => {
  return (
    <nav className={`${styles.mainMenu}`}>
        <ul className={styles.mainNav}>
            <li className={styles.item}>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li className={styles.item}>Product</li>
            <li className={styles.item}>Order</li>
            <li className={styles.item}>
              <Link to='/contact'>
                Contact
              </Link>
            </li>
        </ul>
        <div className={styles.costumerCart}>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>
    </nav>
  )
}
