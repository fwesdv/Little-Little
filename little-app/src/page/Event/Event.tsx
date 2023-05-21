import {useEffect, useState} from 'react'
import styles from './Event.module.css'
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { events } from "../../types/events";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../../component/button/Arrow";

function Event (): JSX.Element{
 const [Data, setData] = useState<events[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const db = getFirestore();
            const colRef = collection(db, "events");
            const docsSnap = await getDocs(colRef);
      
            const newData: events[] = [];
            docsSnap.forEach(doc => {
              newData.push(doc.data());
            });
      
            setData(prevData => [...prevData, ...newData]);
          } catch (error) {
            console.error('Error fetching events:', error);
          }
        };
      
        fetchData();
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };
    return(
    <>

        <div className={styles.container}>
            <div className={styles.title}>Sự kiện nổi bật</div>
            <div className={styles.contain}>
                <div className={styles.contain_main}>
                    
                    <div className={styles.contain_event}>
                    <Slider {...settings}>
                        {Data.concat(Data).map((item, index) => (
                            <div key={index} className={styles.event}>
                                <div className={styles.event_img}>
                                    <img src={item.image} />
                                </div>

                                <div className={styles.event_main}>
                                    <p>{item.content}</p>
                                    <p>{item.name}</p>
                                    <div > 
                                        <div className={styles.calendar_icon}></div>
                                        <p>{item.dateStart} - {item.dateEnd}</p>
                                    </div>
                                    <p>{item.price} VNĐ</p>
                                    
                                    <a href={`/event/${item.id}`}className={styles.btn}>Xem chi tiết</a>
                                </div>
                            </div>
                            ))}
                        </Slider>


                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Event