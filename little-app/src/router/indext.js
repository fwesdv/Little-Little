import Home from '../page/Home/Home';
import Event from '../page/Event/Event';
import Contact from '../page/Contact/Contact';
import eventDetails from '../page/eventDetails/eventDetails';
import pay from '../page/pay/pay';
import PaymentSuccess from "../page/PaymentSuccess/PaymentSuccess"
import notfound from "../page/notfound/notfound"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/event', component: Event },
    { path: '/contact', component: Contact },
    { path: '/event/:id', component: eventDetails },
    { path: '/pay/:id', component: pay },
    { path: '/PaymentSuccess/:id', component: PaymentSuccess },
    { path: '*', component: notfound },

];

export { publicRoutes };
