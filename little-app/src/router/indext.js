import Home from '../page/Home/Home';
import Event from '../page/Event/Event';
import Contact from '../page/Contact/Contact';
import eventDetails from '../page/eventDetails/eventDetails';
import pay from '../page/pay/pay';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/event', component: Event },
    { path: '/contact', component: Contact },
    { path: '/eventDetails', component: eventDetails },
    { path: '/pay', component: pay },
];

export { publicRoutes };
