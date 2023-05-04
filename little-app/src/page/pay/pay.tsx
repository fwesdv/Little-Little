import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './pay.module.css'
import Navbar from "../../navbar";
import Trini from '../../assets/Trini_Arnold_Votay1 2.png'
type Prop={}
const Contact =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.title}>Thanh toán</div>
            <img src={Trini} alt="human" className={styles.Trini} />
            <div className={styles.containerMain}>
                <div className={styles.bodyTitle}><div className={styles.body_red_tiker}>VÉ CỔNG - VÉ GIA ĐÌNH</div></div>
                
                <div className={styles.body_note_1}>
                    <div className={styles.info_h}>
                        <div >
                            <label >Số tiền thanh toán</label>
                            <input type="text" placeholder="360.000 vnđ" />
                        </div>  

                        <div >
                            <label >Số lượng vé</label>
                                <div >
                                    <input type="text" placeholder="4" /><a> vé</a>
                                </div>
                        </div>

                        <div >
                            <label >Ngày sử dụng</label>
                            <input type="text" placeholder="15/08/2021" />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div >                    
                            <label >Thông tin liên hệ</label>
                            
                        <input type="text" placeholder="Nguyễn Thị Ngọc Tuyền" /></div>

                        <div >                    
                            <label >Điện thoại</label>
                            <input type="text" placeholder="0123456789" /></div>
                        <div >                    
                            <label >Email</label>
                        <input type="text" placeholder="tuyen.nguyen@alta.com.vn" /></div>
                    </div>
                    
                </div>

                <div className={styles.body_note_2}></div>

                <div className={styles.body_note_3}>
                    <div className={styles.body_red_tiker}>VÉ CỔNG - VÉ GIA ĐÌNH</div>
                    <div>
                        <div >                    
                            <label >Số thẻ</label>
                            <input type="text" placeholder="3641 4513 4369 7895" /></div>
                        <div >                    
                            <label >Họ tên chủ thẻ</label>
                            <input type="text" placeholder="NGUYEN THI NGOC TUYEN" /></div>

                        <div className={styles.dateAndBtn}>
                            <label >Ngày hết hạn</label>
                            <div >                            
                                <input className={styles.date}type="text"placeholder="05/2025"/>
                            <div className={styles.calendar_icon}></div></div>

                        </div>

                        <div >                    
                            <label >CVV/CVC</label>
                            <input type="password" placeholder="***" /></div>
                    </div>

                    <button className={styles.btn}>Thanh toán</button>

                    
                </div>
            </div>
        </div>
    </>
    )
}
export default Contact