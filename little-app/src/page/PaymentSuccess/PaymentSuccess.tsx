import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './PaymentSuccess.module.css'
import Navbar from "../../navbar";
import Alvin from '../../assets/Alvin_Arnold_Votay1 1.png'
type Prop={}
const Contact =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.title}>Thanh toán thành công</div>
            <img src={Alvin} alt="human" className={styles.Alvin} />
            <div className={styles.containerMain}>

                <div className={styles.contain_previous}></div>
                <div className={styles.contain_event}>
                    <div >
                        <div className={styles.event1}>
                            <div className={styles.QrCode}></div>
                            <div className={styles.event_main}>
                                <p>ALT20210501</p>
                                <p>VÉ CỔNG</p>
                                <p>---</p>
                                <p>Ngày sử dụng: 31/05/2021</p>
                                <div className={styles.event1_tick}></div>

                            </div>
                        </div>
                        <div className={styles.event2}>
                        <div className={styles.QrCode}></div>
                            <div className={styles.event_main}>
                                <p>ALT20210501</p>
                                <p>VÉ CỔNG</p>
                                <p>---</p>
                                <p>Ngày sử dụng: 31/05/2021</p>
                                <div className={styles.event1_tick}></div>

                            </div>
                        </div>
                        <div className={styles.event3}>
                        <div className={styles.QrCode}></div>
                            <div className={styles.event_main}>
                                <p>ALT20210501</p>
                                <p>VÉ CỔNG</p>
                                <p>---</p>
                                <p>Ngày sử dụng: 31/05/2021</p>
                                <div className={styles.event1_tick}></div>

                            </div>
                        </div>
                        <div className={styles.event4}>
                        <div className={styles.QrCode}></div>
                            <div className={styles.event_main}>
                                <p>ALT20210501</p>
                                <p>VÉ CỔNG</p>
                                <p>---</p>
                                <p>Ngày sử dụng: 31/05/2021</p>
                                <div className={styles.event1_tick}></div>

                            </div>
                        </div>
                    </div>
                    

                    <div className={styles.contain_bot}>
                        <p >Số lượng: 12 vé</p>
                        <p >Trang 1/3</p>
                    </div>
                </div>
                <div className={styles.contain_next}></div>
                
            </div>

            <div className={styles.btn_2}>
                <a href="/eventDetails"className={styles.btn}>Tải về</a>
                <a href="/eventDetails"className={styles.btn}>Gửi Email</a>
            </div>
        </div>
    </>
    )
}
export default Contact