import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import {BrandHeader} from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'
import { DesignIdeas } from '../../components/Sections/DesignIdeas'
import { OurProduct } from '../../components/Sections/OurProduct'
import { Welcome } from '../../components/Sections/Welcome'

export const Home = () => {
  return (
    <div>
        <BrandHeader/>
        <Menu/>
        <Welcome/>
        <OurProduct/>
        <DesignIdeas/>
        <Footer/>
    </div>
  )
}
