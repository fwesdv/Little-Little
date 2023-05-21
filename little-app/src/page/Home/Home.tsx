import styles from './Home.module.css'
import start from "../../assets/start.png"
import logo_damsen from "../../assets/logo_damsen.png"
import girl from "../../assets/girl.png"
import human from '../../assets/4_human.png'
import React ,{ useState } from 'react';
import { DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";
import {  ticketCollection } from "../lb/controller";
import { ticket } from '../../types/ticket'
import { addDoc} from "@firebase/firestore";
function Home (): JSX.Element{  
    interface TypeValues {
        [key: string]: number;
      }

    const addNewTicket =async(ticketData:ticket)=>{ 
        try {
            const newTicket = await addDoc(ticketCollection, { ...ticketData });
            const documentId = newTicket.id;
            return documentId;
          } catch (error) {
            console.error('Error adding new ticket:', error);
          }
    }

    const navigate =useNavigate();
    const newTicket =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const typeValues: TypeValues = {
            Gd1: 25000,
            Gd2: 50000,
            Gd3: 75000
          };

        const ticketDocumentId = await addNewTicket({
            Name,
            Email,
            Phone,
            Type,
            Amount,
            SelectedDate,
            Price: Number(Amount) * typeValues[Type],
        });
        switch (true) {
            case !Amount:
              alert('Vui lòng nhập số lượng vé');
                return;
            case !Name:
                alert('Vui lòng nhập họ và tên');
                return;
            case !Phone:
                alert('Vui lòng nhập số điện thoại');
                return;
            case !/^\d{10}$/i.test(Phone):
                alert('Số điện thoại phải đủ 10 số');
                return;
            case !Email:
                alert('Vui lòng nhập email');
                return;
            case !/\S+@\S+\.\S+/.test(Email):
                alert('Vui lòng nhập email đúng định dạng');
                return;
            case !Type:
                alert('Vui lòng chọn gói');
                return;
            case !SelectedDate:
                alert('Vui lòng chọn ngày');
                return;
            default:
              
          }
        console.log("thanh cong them ve moi");
        navigate(`/pay/${ticketDocumentId}`)
    };
    


        const [StartDate, setStartDate] =useState(new Date());
        function onChangeDate(value:any){
            setStartDate(value)
        }
        
        //chuyển đổi chuỗi ngày tháng
        const dateString = StartDate;
        const dateObject = new Date(dateString);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; 
        const year = dateObject.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        const SelectedDate = String(formattedDate);
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
                            <DatePicker className={styles.date} onChange={onChangeDate} format="DD/MM/YYYY" />         
                        </div>
                    </div>

                    <input type="text" placeholder="Họ và tên"  onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Địa chỉ email" onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit" id="submit"  className={styles.btn}>
                        Đặt vé</button>
                </form>
                <div className={styles.body_red_tiker}>VÉ CỦA BẠN</div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Home