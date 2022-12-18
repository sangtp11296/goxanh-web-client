import React from 'react'
import styles from './Product.module.css'
import { Footer } from '../../components/Footer/Footer'
import { BrandHeader } from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'

export const Product = () => {
  return (
    <div className={styles.product}>
        <BrandHeader/>
        <Menu/>
        
    </div>
  )
}
