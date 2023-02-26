import React, { useState } from 'react'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
    const image_list = ['1.webp','2.png','3.jpg','4.avif','5.avif']
    const color_list = ['antique_oak', 'chestnut', 'ebony', 'larch', 'light_oak', 'palisander', 'pine', 'teak', 'wenge']
    const [activ, setActiv] = useState(image_list[0]) 
    const [color,setColor] = useState('')
    function incrementValue(){
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if(value<100){
            value++;
                document.getElementById('number').value = value;
        }
    }
    function decrementValue()
    {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if(value>1){
            value--;
                document.getElementById('number').value = value;
        }
    }
  return (
    <div className={styles.productDetailContainer}>
        <div className={styles.productWrapper}>
            <div className={styles.mainProduct}>
                <div className={styles.productImages}>
                    <div className={styles.sideImages}>
                        {image_list.map((img)=>{
                            return(
                                img===activ ?
                                <img src={'/products/'+img} onClick={()=>setActiv(img)} style={{width:100,height:100,objectFit:'cover',border:'1px solid var(--secondary)',borderRadius:3}} alt=''></img> :
                                <img src={'/products/'+img} onClick={()=>setActiv(img)} style={{width:100,height:100,objectFit:'cover'}} alt=''></img> 
                            )
                        })}
                    </div>
                    <div className={styles.largeImage}>
                        <img src={'/products/'+ activ} alt='' style={{width:550,height:550,objectFit:'cover'}}></img>
                    </div>
                </div>
                <div className={styles.productContent}>
                    <div className={styles.productName}>
                        <h1>12-Slat Deck Tiles</h1>
                    </div>
                    <div className={styles.subTitle}>
                        <h2>Outdoor Floor Tile, Wooden, Acacia</h2>
                    </div>
                    <div className={styles.starRating}>
                        <i className={`fa-solid fa-star ${styles.checked}`}></i>
                        <i className={`fa-solid fa-star ${styles.checked}`}></i>
                        <i className={`fa-solid fa-star ${styles.checked}`}></i>
                        <i className={`fa-solid fa-star ${styles.checked}`}></i>
                        <i className="fa-solid fa-star"></i>
                        <span>15 reviews</span>
                    </div>  
                    <div className={styles.price}>
                        <span className={styles.iniPrice}>$1.99</span>
                        <span className={styles.finalPrice}>$0.99</span>
                    </div>
                    <div className={styles.productColor}>
                        Color<span>{color}</span>
                        <ul className={styles.colorList}>
                            {color_list.map((col)=>{
                                return(
                                    col===color ? 
                                    <li className={styles.colorItem} onClick={()=>setColor(col)} style={{border:'1px solid #FFF',boxShadow:'0 0 3px #888',backgroundImage:`url(/color/${col}.jpg)`}}></li>:
                                    <li className={styles.colorItem} onClick={()=>setColor(col)} style={{backgroundImage:`url(/color/${col}.jpg)`}}></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.productBuying}>
                        <input type="button" onClick={()=>decrementValue()} value="-" />
                        <input type="text" name="quantity" defaultValue='1' max="100" size="1" id="number" />
                        <input type="button" onClick={()=>incrementValue()} value="+" />
                    </div>
                    <div className={styles.productDesc}>
                        <span>12” x 12” Square Acacia Hardwood Flooring Wood Tiles, Patio Deck, Paver Interlocking tiles, Easy Install Indoor Outdoor, Pack of 10, Dark Brown. Crafted from high-quality natural wood. Not only are highly functional, minimal yet trendy designs of our products make them great decorations for your houses.</span>
                    </div>
                    <div className={styles.buyButton}></div>
                    <div className={styles.productFeatures}>
                        <div className={styles.productDetail}></div>
                        <div className={styles.productReviews}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
