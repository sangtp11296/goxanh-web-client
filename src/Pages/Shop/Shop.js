import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
import { Footer } from '../../components/Footer/Footer'
import { BrandHeader } from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'

export const Shop = () => {
  return (
    <div className={styles.product}>
        <BrandHeader/>
        <Menu/>
        <div className={styles.aboutCover}>
          <h2>Shop</h2>
          <h3><Link to='/'>Home</Link> / <Link to='/about'>Shop</Link></h3>
        </div>
        <div className={styles.shopContainer}>
          <div className={`${styles.shopWrapper} ${styles.wrapper}`}>
            <div className={styles.shopRow}>
              <div className={styles.shopContent}>
                <div className={styles.productWrapper}>
                  <div className={styles.itemWrapper}>
                    <div className={styles.itemInner}>
                      <div className={styles.itemImage}>
                        <Link to='' >
                          <span className={styles.gallery}>
                            <img src='/products/5.avif' alt='12-slat' style={{'width':'400px','height':'533px'}}/>
                          </span>
                          <img src='/products/4.avif' alt='12-slat' style={{'width':'400px','height':'533px'}}/>
                        </Link>
                      </div>
                      <div className={styles.itemImage}>

                      </div>
                    </div>  
                  </div>
                  <div className={styles.itemWrapper}>
                    <div className={styles.itemInner}>
                      <div className={styles.itemImage}>
                        <Link to='' >
                          <img src='/products/4.avif' alt='12-slat' style={{'width':'400px'}}/>
                        </Link>
                      </div>
                      <div className={styles.itemImage}>

                      </div>
                    </div>  
                  </div>
                  <div className={styles.itemWrapper}>
                    <div className={styles.itemInner}>
                      <div className={styles.itemImage}>
                        <Link to='' >
                          <img src='/products/4.avif' alt='12-slat' style={{'width':'400px'}}/>
                        </Link>
                      </div>
                      <div className={styles.itemImage}>

                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
