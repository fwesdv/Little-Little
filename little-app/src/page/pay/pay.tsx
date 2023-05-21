import React, {useEffect, useState} from 'react'
import styles from './pay.module.css'
import Trini from '../../assets/Trini_Arnold_Votay1 2.png'
import { useNavigate, useParams } from "react-router-dom";
import { bankCardCollection } from '../lb/controller';
import { DatePicker } from 'antd';
import { addDoc, doc, getDoc, getFirestore } from '@firebase/firestore';
import { bankCard } from '../../types/bankCard';

function Pay() : JSX.Element{

    const  ticketId  =useParams().id;
    const db = getFirestore();
    useEffect(() => {
      const fetchData = async () => {
        const docRef = doc(db, 'ticket',String(ticketId));
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (data) {
            setPhone(data.Phone);
            setEmail(data.Email);
            setNameTK(data.Name);
            setAmount(data.Amount);
            setPrice(data.Price);
            setSelectedDate(data.SelectedDate);
        }
      };
      fetchData();
    }, [db]);
    const [Amount, setAmount] = useState('');
    const [NameTK, setNameTK] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [SelectedDate, setSelectedDate] = useState('');
    const [Price, setPrice] = useState('');


    const addNewbankCard =async(bankCardData:bankCard)=>{ 
        try {
            const newbankCard = await addDoc(bankCardCollection, { ...bankCardData });
            const documentId = newbankCard.id;
            console.log(`documentId`,documentId);
            return documentId;  
          } catch (error) {
            console.error('Error adding new bankCard:', error);
          }
    };
    const navigate =useNavigate();
    const newbankCard =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const bankCardDocumentId  =  addNewbankCard({
            bankCardN,
            Name,
            Dayend,
            CVC,
            TicketId: String(ticketId)
        });

        switch (true) {
            case !bankCardN:
                alert('Vui lòng nhập số lượng vé');
                return;
            case !Name:
                alert('Vui lòng nhập họ và tên');
                return;
            case !CVC:
                alert('Vui lòng nhập email');
                return;
            case !Dayend:
                alert('Vui lòng chọn ngày');
                return;
            default:
             
          }
        bankCardDocumentId.then(result => {
            navigate(`/PaymentSuccess/${result}`)
          });   
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

        const Dayend = String(formattedDate);
        const [bankCardN, setbankCardN] = useState('');
        const [Name, setName] = useState('');
        const [CVC, setCVC] = useState('');


    return(
    <>
        <div className={styles.container}>
            <div className={styles.title}>Thanh toán</div>
            <img src={Trini} alt="human" className={styles.Trini} />
            <div className={styles.containerMain}>
                <div className={styles.bodyTitle}><div className={styles.body_red_tiker}>VÉ CỔNG - VÉ GIA ĐÌNH</div></div>
                
                <div className={styles.body_note_1}>
                    <div className={styles.info_h}>
                        <div >
                            <label >Số tiền thanh toán</label>
                            <div className={styles.input}>{Price+" vnđ"}</div>
                        </div>  

                        <div >
                            <label >Số lượng vé</label>
                                <div >
                                    <div className={styles.input}>{Amount}</div>
                                    <a> vé</a>
                                </div>
                        </div>
                        <div >
                            <label >Ngày sử dụng</label>
                            <div className={styles.input}>{SelectedDate}</div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div >                    
                            <label >Thông tin liên hệ</label>
                            <div className={styles.input}>{NameTK}</div>
                        </div>
                        <div >                    
                            <label >Điện thoại</label>
                            <div className={styles.input}>{Phone}</div>
                        </div>
                        <div >                    
                            <label >Email</label>
                            <div className={styles.input}>{Email}</div>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.body_note_2}></div>

                <div className={styles.body_note_3}>
                    <div className={styles.body_red_tiker}>VÉ CỔNG - VÉ GIA ĐÌNH</div>
                    <div>
                        <form className={styles.body_form} onSubmit={(e)=>newbankCard(e)}>
                        <div >                    
                            <label >Số thẻ</label>
                            <input type="text" placeholder="3641 4513 4369 7895" onChange={(e) => setbankCardN(e.target.value)}/></div>
                        <div >                    
                            <label >Họ tên chủ thẻ</label>
                            <input type="text" placeholder="NGUYEN THI NGOC TUYEN" onChange={(e) => setName(e.target.value)}/></div>

                        <div className={styles.dateAndBtn}>
                            <label >Ngày hết hạn</label>
                            <div className={styles.DatePicker} >                            
                                <DatePicker className={styles.DatePicker_1} onChange={onChangeDate} format="DD/MM/YYYY" />   
                                <div className={styles.calendar_icon}></div>
                            </div>

                        </div>

                        <div >                    
                            <label >CVV/CVC</label>
                            <input type="password" placeholder="***" onChange={(e) => setCVC(e.target.value)}/></div>
                        <div className={styles.btn_1}>
                            <button type="submit" id="submit"  className={styles.btn}>Thanh toán</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Pay