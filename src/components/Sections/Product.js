import React from 'react'
import styles from './Product.module.css'

export const Product = () => {
  return (
    <div className={styles.productContainer}>
        <span className={styles.headline}>Our Products</span>
        <div className={styles.productWrapper}>
          <div className={styles.productInfo}>
            <div className={styles.productTitle}>12-Slat Deck Tile</div>
            <div className={styles.productTagline}>Outdoor Floor Tile, Wooden, Acacia</div>
            <div className={styles.productDesc}>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles, Easy Install Indoor Outdoor, Pack of 10, Dark Brown. Crafted from high-quality natural wood. Not only are highly functional, minimal yet trendy designs of our products make them great decorations for your houses.</div>
          </div>
          <div className={styles.imagePart}>
            <div className={styles.imageProduct}>
              <img alt='12-slat deck tiles' src='/products/12-slat.png' style={{height:"500px"}}></img>
            </div>
          </div>
        </div>
    </div>
  )
}
