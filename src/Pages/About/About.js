import React from 'react'
import { Link } from 'react-router-dom'
import { BrandHeader } from '../../components/Header/BrandHeader'
import { Menu } from '../../components/Header/Menu'
import styles from './About.module.css'

export const About = () => {
  return (
    <div>
        <BrandHeader/>
        <Menu/>
        <div className={styles.aboutCover}>
          <h2>About Us</h2>
          <h3><Link to='/'>Home</Link> / <Link to='/about'>About Us</Link></h3>
        </div>
        <div className={styles.aboutContent}>
          <div className={`${styles.aboutSection} ${styles.firstSection}`}>
            <div className={styles.textSide}>
              <h2 className={styles.aboutTitle}>
                GreenWood Story
              </h2>
              <div className={styles.contentPart}>
              There are probably a million other businesses that sell what you're selling, but no one else shares your story. Your story is what makes you unique. Don't just write numbers and dates; let your prospects know who you really are. Be vulnerable and tell them why you started your business.
              <br/>
              What inspired you? Share the bad and the good, it doesn't have to be glamorous. It only has to be authentic.
              </div>
            </div>
            <div className={styles.imageSide}>
              <img src='/products/7.webp' alt='about story'/>
            </div>
          </div>
          <div className={`${styles.aboutSection} ${styles.secondSection}`}>
            <div className={styles.imageSide}>
              <img src='/products/4.avif' alt='about mission'/>
            </div>
            <div className={styles.textSide}>
              <h2 className={styles.aboutTitle}>
                GreenWood Mission
              </h2>
              <div className={styles.contentPart}>
              Your mission statement should clearly express what your brand does, how it does it, and why the brand does it. You can quickly sum this up in your mission statement by providing the following:
              <br/>
              Brand Purpose: What does your product or service do, or aim to provide and for whom?
              <br/>
              Brand Values: What does your company stand for? For example, are you environmentally conscious and provide a more sustainable solution to solve a problem? Values are what make your company unique.
              <br/>
              Brand Goals: What does your company accomplish for customers? Why should they purchase from you instead of other competitors?
              <br/>
              With these three components, you can create a mission that is unique to your brand and resonates with potential customers. Next, we,ll guide you step by step how to write a proper mission statement to build off of as your company evolves.
              </div>
            </div>
          </div>
          <div className={`${styles.aboutSection} ${styles.thirdSection}`}>
            <div className={styles.textSide}>
              <h2 className={styles.aboutTitle}>
                GreenWood History
              </h2>
              <div className={styles.contentPart}>
                This needs to be in chronological; otherwise, it will confuse your readers. You can do it in a paragraph or a timeline format as long as it shows a flow.
                <br/>
                Another tip is to remember that less can be more. As tempting as it is to share all your milestones, stick to the major ones to avoid overwhelming the reader.
                <br/>
                The next step is to describe what your company offers. You can choose a few of your best products or services and give an in-depth description or simply list down everything your business offers.
                <br/>
                If you have received any awards or recognition, add them to your profile and describe them. They showcase your company's values and give the community a reason to trust you.
              </div>
            </div>
            <div className={styles.imageSide}>
              <img src='/products/9.webp' alt='about mission'/>
            </div>
          </div>
        </div>
    </div>
  )
}
