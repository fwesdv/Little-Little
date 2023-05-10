import { DatePicker } from 'antd';
import  styles from "./calender.module.css";

function MyComponent (){
  return (
    <div className={styles.dateAndBtn}>
      <DatePicker className={styles.date} placeholder="Ngày sử dụng"/>
    </div>
  );
};

export default MyComponent;
