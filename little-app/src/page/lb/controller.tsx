import { addDoc, collection, doc, getFirestore } from "@firebase/firestore";
import { app } from "./firebase";
import { nextTick } from "process";
import { TicketType, ticket } from "../../types/ticket";

export const firestore =getFirestore(app)

export const eventCollection=collection(firestore,"events");
export const ticketCollection=collection(firestore,"ticket");

export const addNewTicket =async(ticketData:ticket)=>{
    const newTicket= await addDoc(ticketCollection,{...ticketData} )
    console.log(`new ticket at ${newTicket.path}`)
}