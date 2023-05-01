import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './Contact.module.css'
import Navbar from "../../navbar";
import Alex from '../../assets/Alex_AR_Lay_Do shadow 1.png'
type Prop={}
const Contact =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.title}>Liên hệ</div>
            <img src={Alex} alt="human" className={styles.Alex} />
            <div className={styles.contai}>
                <div className={styles.contai_main}>        
                    <div >
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                        <div className={styles.info}>
                            <div className={styles.nameAndphone}>
                                <input className={styles.input}type="text"placeholder="Số lượng vé"/>
                                <input className={styles.input}type="text"placeholder="Ngày sử dụng"/>
                            </div>

                            <div className={styles.emailAndAddress}>
                                <input className={styles.input}type="text"placeholder="Số lượng vé"/>
                                <input className={styles.input}type="text"placeholder="Ngày sử dụng"/>
                            </div>
                        </div>
                        <input className={styles.note}type="text"placeholder="Ngày sử dụng"/>
                        <div className={styles.btn}><button className={styles.btn1}>Xem chi tiết</button></div>
                        
                    </div>
                    
                </div>
                <div className={styles.contai_info}>
                    <div className={styles.dc}>
                        <p >Địa chỉ:</p>
                        <p >86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                    </div>
                    <div className={styles.email}>
                        <p >Email:</p>
                        <p >investigate@your-site.com</p>
                    </div>
                    <div className={styles.dt}>
                        <p >Điện thoại:</p>
                        <p >+84 145 689 798</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contact