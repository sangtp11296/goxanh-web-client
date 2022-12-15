import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={`${styles.menu} ${styles.flexItem}`}>
                <ul className={styles.mainNav}>
                Links
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
                <ul className={styles.mainNav}>
                Products
                    <li className={styles.item}>
                        <Link to='/'>
                            12-Slat Deck Tile
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/about'>
                            6-Slat Deck Tile
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.brand} ${styles.flexItem}`}>
                <Link to='/' className={styles.logoBrand}>
                    <img src='Greenwood-logo.png' alt='green-wood' style={{height:140}}></img>
                </Link>
                <span>There are probably a million other businesses that sell what you're selling, but no one else shares your story.</span>
            </div>
            <div className={`${styles.contact} ${styles.flexItem}`}>
                <h3>Subscribe For More Information</h3>
                <h4>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</h4>
                <div className={styles.emailPart}>
                    <input name='email' type='text' required maxLength='500' className={styles.emailInput} autoFocus={false} placeholder='Enter your email...' />
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div className={styles.socialPart}>
                    <a  href='https://www.facebook.com/sang.tp.11296' rel="noopener noreferrer">
                        <i className="fab fa-facebook-square "></i>
                    </a>
                    <a  href='https://www.instagram.com/nguoidiban.mua/' rel="noopener noreferrer">
                        <i className="fab fa-instagram "></i>
                    </a>
                    <a  href='https://www.instagram.com/nguoidiban.mua/' rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin "></i>
                    </a>
                    <a  href='https://www.instagram.com/nguoidiban.mua/' rel="noopener noreferrer">
                        <i class="fa-brands fa-youtube "></i>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.copy}>
            <div>Copyright © 2022 GreenWood Vietnam. All Rights Reserved</div>
        </div>
    </div>
  )
}
