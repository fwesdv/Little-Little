import React, {useState} from 'react'
import styles from './Contact.module.css'

import Alex from '../../assets/Alex_AR_Lay_Do shadow 1.png'
import { addNewContact } from "../lb/controller";
import Modal, { ModalBody } from '../../component/modal/Modal';
function Contact (){

    
    const newContact =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addNewContact({
            Address,
            Name,
            Description,
            Phone,
            Email
        });
        switch (true) {
            case !Address:
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
            default:
          }
        if (Name && Phone && Email && Address) {
            setShowModal(true);
        }
        console.log("thanh cong them ve moi");

    };
        const [Address, setAddress] = useState('');
        const [Name, setName] = useState('');
        const [Email, setEmail] = useState('');
        const [Description, setDescription] = useState('');
        const [Phone, setPhone] = useState('');
        const [showModal, setShowModal] = useState(false);
    return(
    <>

        <div className={styles.container}>
            <div className={styles.title}>Liên hệ</div>
            <img src={Alex} alt="human" className={styles.Alex} />
            <div className={styles.contai}>
                <div className={styles.contai_main}>        
                    <div >
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                        <form onSubmit={(e)=>newContact(e)}>
                            <div className={styles.info}>
                                <div className={styles.nameAndphone}>
                                    <input className={styles.input}type="text"placeholder="Tên" onChange={(e) => setName(e.target.value)}/>
                                    <input className={styles.input}type="text"placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)}/>
                                </div>

                                <div className={styles.emailAndAddress}>
                                    <input className={styles.input}type="text"placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                    <input className={styles.input}type="text"placeholder="Địa chỉ" onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                            </div>
                            <input className={styles.note}type="text"placeholder="Lời nhắn" onChange={(e) => setDescription(e.target.value)}/>
                            
                            <div className={styles.btn}>
                            <button type="submit" id="submit" className={styles.btn1}>Gửi liên hệ</button></div>
                        </form> 
                    </div>
                    
                </div>
                <div className={styles.contai_info}>
                    <div className={styles.dc}>
                        <p >Địa chỉ:</p>
                        <p >86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                    </div>
                    <div className={styles.email}>
                        <p >Email:</p>
                        <p >investigate@your-site.com</p>
                    </div>
                    <div className={styles.dt}>
                        <p >Điện thoại:</p>
                        <p >+84 145 689 798</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <Modal show={showModal} setShow={setShowModal}>
                <ModalBody>
                    <br></br>
                    <p style={{ textAlign: 'justify' }}>
                        Gửi liên hệ thành công.<br></br>
                        Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
                    </p>
                </ModalBody>
            </Modal>
        </div>
    </>
    )
}
export default Contact