import {useEffect, useRef, useState} from 'react'
import styles from './PaymentSuccess.module.css'
import Alvin from '../../assets/Alvin_Arnold_Votay1 1.png'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import html2canvas from 'html2canvas';

function Contact (){

    const  bankCardId  =useParams().id;
    const db = getFirestore();
    useEffect(() => {
      const fetchData = async () => {
        const docRef = doc(db, 'bankCard',String(bankCardId));
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (data) {
            setTicketId(data.TicketId);
        }
      };
      fetchData();
    }, [db]);
    const [TicketId, setTicketId] = useState('');
    

    const fetchData = async () => {
          const docRef = doc(db, 'ticket', TicketId);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          if (data) {
            setSelectedDate(data.SelectedDate);
          }
      };
      fetchData();
      const [SelectedDate, setSelectedDate] = useState('');

      const png = useRef(null);
      const handleDownloadClick = () => {
        if (png.current) {
            html2canvas(png.current).then((canvas) => {
                const link = document.createElement('a');
                link.download = 'Ticket.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    };
    return(
    <>
        <div className={styles.container}>
            <div className={styles.title}>Thanh toán thành công</div>
            <img src={Alvin} alt="human" className={styles.Alvin} />
            <div className={styles.containerMain}>
                <div ref={png} className={styles.contain_event}>
                    <div >
                        <div className={styles.event1}>
                            <div className={styles.QrCode}></div>
                            <div className={styles.event_main}>
                                <p>{TicketId}</p>
                                <p>VÉ CỔNG</p>
                                <p>---</p>
                                <p>Ngày sử dụng: {SelectedDate}</p>
                                <div className={styles.event1_tick}></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.btn_2}>
                
                <a className={styles.btn} onClick={handleDownloadClick}>Tải về</a>
                <a href="/"className={styles.btn}>Gửi Email</a>
            </div>
        </div>
    </>
    )
}
export default Contact