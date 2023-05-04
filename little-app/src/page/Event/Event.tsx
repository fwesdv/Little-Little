import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './Event.module.css'
import Navbar from "../../navbar";
type Prop={}
const Event =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.title}>Sự kiện nổi bật</div>
            <div className={styles.contain}>
            <div className={styles.contain_previous}></div>
                <div className={styles.contain_event}>
                    <div className={styles.event1}>
                        <div className={styles.event1_img}></div>

                        <div className={styles.event_main}>
                            <p>Sự kiện 1</p>
                            <p>Đầm sen Park</p>
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>30/05/2021 - 01/06/2021</p>
                            </div>
                            <p>25.000 VNĐ</p>

                            <a href="/eventDetails"className={styles.btn}>Xem chi tiết</a>
                        </div>
                    </div>
                    <div className={styles.event2}>
                        <div className={styles.event2_img}></div>

                        <div className={styles.event_main}>
                            <p>Sự kiện 2</p>
                            <p>Đầm sen Park</p>
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>30/05/2021 - 01/06/2021</p>
                            </div>
                            <p>25.000 VNĐ</p>
                            <a href="/eventDetails"className={styles.btn}>Xem chi tiết</a>
                        </div>
                    </div>
                    <div className={styles.event3}>
                        <div className={styles.event3_img}></div>

                        <div className={styles.event_main}>
                            <p>Sự kiện 3</p>
                            <p>Đầm sen Park</p>
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>30/05/2021 - 01/06/2021</p>
                            </div>
                            <p>50.000 VNĐ</p>
                            <a href="/eventDetails"className={styles.btn}>Xem chi tiết</a>
                        </div>
                    </div>
                    <div className={styles.event4}>
                        <div className={styles.event4_img}></div>

                        <div className={styles.event_main}>
                            <p>Sự kiện 4</p>
                            <p>Đầm sen Park</p>
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>30/05/2021 - 01/06/2021</p>
                            </div>
                            <p>55.000 VNĐ</p>
                            <a href="/eventDetails"className={styles.btn}>Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                <div className={styles.contain_next}></div>
                
            </div>
        </div>
    </>
    )
}
export default Event