import { type } from "os"
import logo from '../assets/image.png';
import React, {useEffect, useState} from 'react'
import styles from './Event.module.css'
import { onSnapshot,QuerySnapshot, DocumentData } from "@firebase/firestore";
import { eventCollection } from "../lb/controller";
import { events } from "../../types/events";
import Infomation from "../../component/InfomationEvent/Infomation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../../component/button/Arrow";



function Event (): JSX.Element{

    const [events, setevent] = useState<events[]>([]);
    useEffect(() => onSnapshot (eventCollection,(snapshot: QuerySnapshot<DocumentData>) => {
        setevent(
            snapshot.docs.map((doc) => {
                return{
                    id: doc.id,
                    ...doc.data(),
                };
            })
        );
        }),[]
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };
    console.log(events,"event");
    return(
    <>

        <div className={styles.container}>
            <div className={styles.title}>Sự kiện nổi bật</div>
            <div className={styles.contain}>
                <div className={styles.contain_main}>
                    
                    <div className={styles.contain_event}>
                    <Slider {...settings}>
                        <div className={styles.event1}>
                                {events && events.length ? (
                                    <div >
                                        {events?.map((event)=>(
                                            <Infomation key={event.id} event= {event}/>
                                        ))}
                                    </div>
                                ):(
                                    <h2>null</h2>
                                )}

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
                        <div className={styles.event5}>
                            <div className={styles.event5_img}></div>

                            <div className={styles.event_main}>
                                <p>Sự kiện 5</p>
                                <p>Đầm sen Park</p>
                                <div > 
                                    <div className={styles.calendar_icon}></div>
                                    <p>30/05/2021 - 01/06/2021</p>
                                </div>
                                <p>55.000 VNĐ</p>
                                <a href="/eventDetails"className={styles.btn}>Xem chi tiết</a>
                            </div>
                        </div>
                        </Slider>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )
}
export default Event