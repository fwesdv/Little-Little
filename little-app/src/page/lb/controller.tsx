import { addDoc, collection, doc, getDoc, getFirestore } from "@firebase/firestore";
import { app } from "./firebase";
import { Contact } from "../../types/contact";

export const firestore =getFirestore(app)
export const eventCollection=collection(firestore,"events");
export const ticketCollection=collection(firestore,"ticket");
export const bankCardCollection=collection(firestore,"bankCard");
export const ContactCollection=collection(firestore,"contact");

export const addNewContact =async(contactData:Contact)=>{ 
  try {
      const newContact = await addDoc(ContactCollection, { ...contactData });
      console.log(`New contact at ${newContact.path}`);
    } catch (error) {
      console.error('Error adding new Contact:', error);
    }
}

 const db= getFirestore();
 const docRef=  doc(db,"ticket","0V6lAGT72FjGtw8KCYo0");
 export const fetchTicketData = async () => {
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
};