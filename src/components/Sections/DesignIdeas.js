import React from 'react'
import styles from './DesignIdeas.module.css'

export const DesignIdeas = () => {
  return (
    <div className={styles.designContainer}>
      <div className={styles.designWrapper}>
        <div className={styles.imagePart}>
          <div className={styles.imageContainter}>
            <img alt='' src='/products/8.jpg'></img>
          </div>
          <div className={styles.imageContainter}>
            <img alt='' src='/products/2.png'></img>
          </div>
          <div className={styles.imageContainter}>
            <img alt='' src='/products/11.jpg'></img>
          </div>
          <div className={styles.imageContainter}>
            <img alt='' src='/products/4.avif'></img>
          </div>
        </div>
        <div className={styles.contentPart}>
          <div className={styles.headline}>
            The Story Behind Our Interlocking Deck Tiles
          </div>
          <div className={styles.descPart}>
            Inexpensive and easy-to-install. But those are not the only reasons why you want to buy them. Customers who remodel their old patio, balcony, or roof with Interbuild Deck Tiles do so because they want a genuinely beautiful outdoor living space that lasts. While settling for painting over their existing surface is always an option, they want something better, more natural. Interbuild real wood deck tiles might be the one you are looking for.
          </div>
          <div className={styles.button}>
            <i class="fas fa-shopping-bag"></i> 
            <span>Our Products</span>
          </div>
          <div className={styles.cornerImage}>
            <img alt='' src='/products/16.png' style={{height:'1100px'}}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
