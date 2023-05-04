import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './eventDetails.module.css'
import Navbar from "../../navbar";

type Prop={}
const Contact =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.title}>Sự kiện 1</div>
            <div className={styles.containerMain}>
                    <div className={styles.event4}>
                        <div className={styles.event4_img}></div>

                        <div className={styles.event_main}>
                            
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>30/05/2021 - 01/06/2021</p>
                            </div>
                            <p>Đầm sen Park</p>
                            <p>55.000 VNĐ</p>
                         </div>
                    </div>
                    <div className={styles.column}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic sdsd typesetting, 
                    remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    of Lorem Ipsum.</div>

                    <div className={styles.column}>
                        <div className={styles.event1}></div>
                        <p >Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                         making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, 
                         and going through the cites of the word in classical literature, </p>
                    </div>
                    <div className={styles.column}>
                        <p >Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                         making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, 
                         and going through the cites of the word in classical literature, </p>
                        <div className={styles.event1}></div>
                    </div>
            </div>
        </div>
    </>
    )
}
export default Contact