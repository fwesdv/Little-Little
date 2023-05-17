import { type } from "os"
import logo from '../assets/image.png';
import React, {useEffect, useState} from 'react'
import styles from './eventDetails.module.css'
import { useParams } from "react-router-dom";
import { eventCollection, firestore } from "../lb/controller";
import { DocumentData, DocumentReference, DocumentSnapshot, QuerySnapshot, doc, getDoc, onSnapshot } from "@firebase/firestore";
import { events } from "../../types/events";
import Infomation from "../../component/InfomationEvent/eventDIF";
import { firebase } from "../lb/firebase";

function EventDetails (){
    const { idp } =useParams();
    const getevent = doc (firestore, `/event/${idp}` )
    const [isloading, setIsloading] = useState(false);

    const [event, setevent] = useState({});
    useEffect(()=>{
        const fetchData = async () =>{
            setIsloading(true);
            const docsnap = await getDoc(getevent);
            if(docsnap.exists()){
                const newevent={
                    id: docsnap.id,
                    ...docsnap.data(),
                }
                setevent(newevent);
                setIsloading(false);
            }else{
                console.log("no data");
            }
        };
        fetchData();
    },[]);
    console.log(idp,"id");

    // const [events, setevent] = useState<events[]>([]);
    // useEffect(() => onSnapshot (eventCollection,(snapshot: QuerySnapshot<DocumentData>): any => {
    //     setevent(
    //         snapshot.docs.map((doc) => {
    //             return{
    //                 id: doc.id,
    //                 ...doc.data(),
    //             };
    //         })
    //     );
    //     }),[]
    // ); 



    return(
    <>

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
                    <div className={styles.column}>
                        {Object.keys(event) && Object.keys(event).length > 0 ? (
                        <Infomation event={event}  />
                        ) : null}
                   {/* {events && events.length ? (
                                <div >
                                    {events?.map((event)=>(
                                        <Infomation key={event.id} event= {event}/>
                                    ))}
                                </div>
                            ):(
                                <h2>null</h2>
                            )}  */}

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