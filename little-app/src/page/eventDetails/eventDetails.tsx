import {useEffect, useState} from 'react'
import styles from './eventDetails.module.css'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "@firebase/firestore";

function EventDetails (){

    const  eventId  =useParams().id;
    const eventid= String(eventId)
    console.log(eventid,"eventId")
    const db = getFirestore();
    useEffect(() => {
      const fetchData = async () => {
        const docRef = doc(db, 'events', eventid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        console.log(data,"eventId")
        if (data) {
            setPrice(data.price);
            setName(data.name);
            setdateStart(data.dateStart);
            setdateEnd(data.dateEnd);
            setimage(data.image);
        }
      };
      fetchData();
    }, [db]);
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [dateStart, setdateStart] = useState('');
    const [dateEnd, setdateEnd] = useState('');
    const [image, setimage] = useState('');

    return(
    <>

        <div className={styles.container}>
            <div className={styles.title}>Sự kiện 1</div>
            <div className={styles.containerMain}>
                    <div className={styles.event4}>
                        <img className={styles.event_img} src={image}/>
                        <div className={styles.event_main}>
                            
                            <div > 
                                <div className={styles.calendar_icon}></div>
                                <p>{dateStart} - {dateEnd}</p>
                            </div>
                            <p>{name}</p>
                            <p>{price} VNĐ</p>
                         </div>
                    </div>
                    <div className={styles.column}>
                        <p className="">Lorem Ipsum is trúedummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, of Lorem Ipsum.</p>
                    </div>

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
export default EventDetails