import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BrandHeader.module.css'

export const BrandHeader = () => {
  return (
    <div className={styles.brandHeaderContainer}>
        <label className={styles.languagePart}>
            <span className={styles.selectedLang}>
                Eng
            </span>
            <div className={styles.arrow}>
                <div className={`${styles.hiddenBox} ${styles.hide}`}>
                    <ul className={styles.boxMenu}>
                        <li className={styles.dotItem}>Eng</li>
                        <li className={styles.dotItem}>Vie</li>
                    </ul>
                </div>
                <i class="fa-solid fa-chevron-down"></i>    
            </div>
        </label>
        <Link to='/' className={styles.logoBrand}>
            <img src='/products/Greenwood-logo.png' alt='green-wood' style={{height:80}}></img>
        </Link>
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
  )
}
