import styles from './Home.module.css'
import start from "../../assets/start.png"
import logo_damsen from "../../assets/logo_damsen.png"
import girl from "../../assets/girl.png"
import human from '../../assets/4_human.png'
import React ,{ useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";
import { addNewTicket } from "../lb/controller";
function Home (){
    
    const navigate =useNavigate();
    const newTicket =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addNewTicket({
            Name,
            Email,
            Phone,
            Type,
            Amount,
            SelectedDate,
        });
        if (!Amount) {
            alert('Vui lòng nhập số lượng vé');
            return;
        }else if (!Name) {
            alert('Vui lòng nhập họ và tên');
            return;
        } else if (!Phone) {
            alert('Vui lòng nhập số điện thoại');
            return;
        }else if (!Email) {
            alert('Vui lòng nhập email');
            return;
        }else if (!Type) {
            alert('Vui lòng chọn gói');
            return;
        }else if (!SelectedDate) {
            alert('Vui lòng chọn gói');
            return;
        }
        console.log("thanh cong them ve moi");
        navigate('/pay')
    };
   
        const [StartDate, setStartDate] =useState(new Date());
        function onChangeDate(value:any){
            setStartDate(value)
        }
        const SelectedDate = String(StartDate);
        const [Amount, setAmount] = useState('');
        const [Name, setName] = useState('');
        const [Phone, setPhone] = useState('');
        const [Email, setEmail] = useState('');
        const [Type, setType] = useState('');

    return(
    <>

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
                <form onSubmit={(e)=>newTicket(e)} >
                    <div className={styles.body_selection} >
                        <select name="cars" id="Type"  onChange={(e) => setType(e.target.value)} >
                            <option value="Gói gia đình">Gói gia đình</option>
                            <option value="Gd1">Gói gia đình1</option>
                            <option value="Gd2">Gói gia đình2</option>
                            <option value="Gd3">Gói gia đình3</option>
                        </select>
                    </div>

                    <div className={styles.TicketAndDate}>
                        <input className={styles.Ticket}type="text"placeholder="Số lượng vé"onChange={(e) => setAmount(e.target.value)} />
                        <div className={styles.dateAndBtn}>
                            <DatePicker onChange={onChangeDate} />
                        </div>
                    </div>

                    <input type="text" placeholder="Họ và tên"  onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Địa chỉ email" onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit" id="submit"  className={styles.btn}>Đặt vé</button>

                    <div className={styles.body_red_tiker}></div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Home