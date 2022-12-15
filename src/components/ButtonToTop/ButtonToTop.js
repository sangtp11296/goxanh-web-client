import React, { useState } from 'react'
import styles from './ButtonToTop.module.css'

export const ButtonToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <=300){
            setVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    window.addEventListener('scroll', toggleVisible)
  return (
    <div className={styles.buttonContainer} onClick={scrollToTop} style={{display: visible ? 'flex':'none'}}>
        <i class="fa-solid fa-angle-up"></i>
    </div>
  )
}
