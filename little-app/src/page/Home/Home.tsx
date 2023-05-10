import { type } from "os"
import logo from '../assets/image.png';
import styles from './Home.module.css'
import start from "../../assets/start.png"
import logo_damsen from "../../assets/logo_damsen.png"
import girl from "../../assets/girl.png"
import human from '../../assets/4_human.png'
import Navbar from "../../navbar";
import { useState, useEffect } from 'react';
import MyComponent from "../../component/calender/calender"
type Prop={}
const Home =(props: Prop)=>{


        const [email, setEmail] = useState('');
        const handleSubmit = (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            if (!email) {
                alert('Vui lòng nhập email');
                return;
              } 
            // Gọi API đăng nhập tại đây
        };
    return(
    <>
    <Navbar></Navbar>
    <div className={styles.container}>
            <img src={human} alt="human" className={styles.human} />
            <img src={girl} alt="girl" className={styles.girl} />
        <div className={styles.body}>
            <div className={styles.body_header}>
                <img src={logo_damsen} className={styles.damsen} alt="Dam sen logo" />
                <div>
                    <p>Đầm sen</p>
                    <p>park</p>
                </div>
            </div>

            <div className={styles.body_main}>
            <div className={styles.body_content}>
                <div className={styles.body_note_1}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                    <p>Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
                    <ul className={styles.note_1List}>
                        <li >
                            <img src={start} alt="icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li >
                            <img src={start} alt="icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>                        
                        <li >
                            <img src={start} alt="icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>                        
                        <li >
                            <img src={start} alt="icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                    </ul>

                </div>

                <div className={styles.body_note_2}></div>

                <div className={styles.body_note_3}>

                    <div className={styles.body_selection} >

                        <select name="cars" id="cars">
                            <option value="Gd">Gói gia đình</option>
                            <option value="Gd1">Gói gia đình1</option>
                            <option value="Gd2">Gói gia đình2</option>
                            <option value="Gd3">Gói gia đình3</option>
                        </select>
                       
                    </div>

                    <div className={styles.TicketAndDate}>
                    <input className={styles.Ticket}type="text"placeholder="Số lượng vé"/>
                    <MyComponent></MyComponent>
                    </div>

                    <input type="text" placeholder="Họ và tên" />
                    <input type="text" placeholder="Số điện thoại" />
                    <input type="text" placeholder="Địa chỉ email" />

                    <button type="submit" id="submit"  className={styles.btn}>Đặt vé</button>

                    <div className={styles.body_red_tiker}></div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Home