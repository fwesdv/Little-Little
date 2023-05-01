import { type } from "os"
import logo from '../assets/image.png';
import React, {useState} from 'react'
import styles from './Contact.module.css'
import Navbar from "../../navbar";

type Prop={}
const Contact =(props: Prop)=>{
    return(
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            
        </div>
    </>
    )
}
export default Contact