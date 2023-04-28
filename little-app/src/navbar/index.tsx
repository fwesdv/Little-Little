import { type } from "os"
import logo from '../assets/Logo (ngang).png';
import React, {useState} from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faPhone} from '@fortawesome/free-solid-svg-icons';

type Prop={}
const Navbar =(props: Prop)=>{
    return(
 
            <div className={styles.navbar}>   
                <nav className={styles.navbar_content}>
                    <img src={logo} className={styles.little_logo} alt="logo" />
                    <ul className={styles.navbar_content_list}>
                        <li className={styles.navbar_content_item}>Trang chủ</li>
                        <li className={styles.navbar_content_item}>Sự kiện</li>
                        <li className={styles.navbar_content_item}>Liên hệ</li>
                    </ul>
                    <div className={styles.phoneNumber}>
                        <FontAwesomeIcon icon={faPhone}className={styles.phoneNumber_icon} />
                        123456789
                    </div>       
                </nav>
            </div>


    )
}
export default Navbar