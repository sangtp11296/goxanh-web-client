import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ShopContainer.module.css'

function ShopContainer() {
  return (
    <div className={styles.shopContainer}>
        <div className={styles.productsWrapper}>
            <div className={`${styles.itemWrapper} ${styles.twoCol} ${styles.oneCol}`}>
                <Link to='/product/1' >
                <div className={styles.itemInner}>
                    <div className={styles.itemImage}>
                            <img className={styles.image1} src='/products/4.avif' alt='12-slat' width={400} height={400}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemTitle}>
                            <h1>12-Slat Deck Tiles</h1>
                        </div>
                        <div className={styles.itemDesc}>
                            <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles</span>
                        </div>
                    </div>
                    <div className={styles.priceTag}>
                        <span>$0.95 - $1</span>
                    </div>
                </div>  
                </Link>
            </div>
            <div className={`${styles.itemWrapper} ${styles.twoCol} ${styles.oneCol}`}>
                <div className={styles.itemInner}>
                    <div className={styles.itemImage}>
                        <Link to='' >
                            <img className={styles.image1} src='/products/4.avif' alt='12-slat' width={400} height={400}/>
                        </Link>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemTitle}>
                            <h1>6-Slat Deck Tiles</h1>
                        </div>
                        <div className={styles.itemDesc}>
                            <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles</span>
                        </div>
                        <div className={styles.priceTag}>
                            <span>$0.95 - $1</span>
                        </div>
                    </div>
                </div>  
            </div>
            <div className={`${styles.itemWrapper} ${styles.twoCol} ${styles.oneCol}`}>
                <div className={styles.itemInner}>
                    <div className={styles.itemImage}>
                        <Link to='' >
                            <img className={styles.image1} src='/products/4.avif' alt='12-slat' width={400} height={400}/>
                        </Link>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemTitle}>
                            <h1>9-Slat Deck Tiles</h1>
                        </div>
                        <div className={styles.itemDesc}>
                            <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles</span>
                        </div>
                        <div className={styles.priceTag}>
                            <span>$0.95 - $1</span>
                        </div>
                    </div>
                </div>  
            </div>
            <div className={`${styles.itemWrapper} ${styles.twoCol} ${styles.oneCol}`}>
                <div className={styles.itemInner}>
                    <div className={styles.itemImage}>
                        <Link to='' >
                            <img className={styles.image1} src='/products/4.avif' alt='12-slat' width={400} height={400}/>
                        </Link>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemTitle}>
                            <h1>4-Slat Deck Tiles</h1>
                        </div>
                        <div className={styles.itemDesc}>
                            <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles</span>
                        </div>
                        <div className={styles.priceTag}>
                            <span>$0.95 - $1</span>
                        </div>
                    </div>
                </div>  
            </div>
            <div className={`${styles.itemWrapper} ${styles.twoCol} ${styles.oneCol}`}>
                <div className={styles.itemInner}>
                    <div className={styles.itemImage}>
                        <Link to='' >
                            <img className={styles.image1} src='/products/4.avif' alt='12-slat' width={400} height={400}/>
                        </Link>
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemTitle}>
                            <h1>9-Slat Deck Tiles</h1>
                        </div>
                        <div className={styles.itemDesc}>
                            <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles</span>
                        </div>
                        <div className={styles.priceTag}>
                            <span>$0.95 - $1</span>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>
    </div>
  )
}

export default ShopContainer