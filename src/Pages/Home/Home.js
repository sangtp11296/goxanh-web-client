import React from 'react'
import {BrandHeader} from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'
import { Product } from '../../components/Sections/Product'
import { Welcome } from '../../components/Sections/Welcome'

export const Home = () => {
  return (
    <div>
        <BrandHeader/>
        <Menu/>
        <Welcome/>
        <Product/>
    </div>
  )
}
