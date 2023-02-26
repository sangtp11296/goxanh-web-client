import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
// import { Footer } from '../../components/Footer/Footer'
import { BrandHeader } from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'
import ShopContainer from '../../components/ShopContainer/ShopContainer'
import { Footer } from '../../components/Footer/Footer'

export const Shop = () => {
  return (
    <div className={styles.product}>
        <BrandHeader/>
        <Menu/>
        <div className={styles.aboutCover}>
          <h2>Shop</h2>
          <h3><Link to='/'>Home</Link> / <Link to='/about'>Shop</Link></h3>
        </div>
        <ShopContainer/>
        <Footer/>
    </div>
  )
}
