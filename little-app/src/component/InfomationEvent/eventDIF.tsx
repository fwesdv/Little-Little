import React from 'react'
import { events } from '../../types/events'
import styles from './Infomation.module.css'
import { Link } from 'react-router-dom';
interface IProps{
    event: events;
    details?: boolean
}
function Infomation({event}:IProps) {
    console.log(event,"event");
  return (
    <>
        {event.description}
    </>
  )
}

export default Infomation