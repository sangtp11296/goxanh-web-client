import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { BrandHeader } from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import styles from './Product.module.css'

export const Product = () => {
  return (
    <div>
        <BrandHeader/>
        <Menu/>
        <div className={styles.siteMap}>
          <h3><Link to='/'>Home</Link> / <Link to='/shop'>Shop</Link> / Product Name</h3>
        </div>
        <ProductDetail/>
        <Footer/>
    </div>
  )
}
