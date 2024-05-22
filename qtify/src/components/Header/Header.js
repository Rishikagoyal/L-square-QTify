import React from 'react';
import styles from './Header.module.css';
import headphones from '../../assets/vibrating-headphone1.png';

const Header=()=>{
    return(
        <>
        <div className={styles.headerDiv} >

         <h3 className={styles.header}>100 Thousand Songs, ad-free<br/> Over thousands podcasts episodes</h3>
         <img src={headphones} alt='headphones' className={styles.headphones}/>

        </div>
        
        </>
    )
}
export default Header;