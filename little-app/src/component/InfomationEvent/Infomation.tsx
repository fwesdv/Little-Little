import React from 'react'
import { events } from '../../types/events'
import styles from './Infomation.module.css'
import { Link } from 'react-router-dom';
interface IProps{
    event: events
    detailsPage?: Boolean;
}
function Infomation({event,detailsPage}:IProps) {
    console.log(event,"event");
  return (
    <>
        <div className={styles.event1_img} >
            <img src={event.image} />
        </div>

        <div className={styles.event_main}>
            <p>{event.content}</p>
            <p>{event.name}</p>
            <div > 
                <div className={styles.calendar_icon}></div>
                <p>{event.dateStart} - {event.dateEnd}</p>
            </div>
            <p>{event.price} VNĐ</p>
            
            <Link to= {`/event/${event.id}` } className={styles.btn} >
               Xem chi tiết
            </Link>
        </div>
    </>
  )
}

export default Infomation