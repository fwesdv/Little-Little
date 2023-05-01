import Home from '../page/Home/Home';
import Event from '../page/Event/Event';
import Contact from '../page/Contact/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/event', component: Event },
    { path: '/contact', component: Contact },
];

export { publicRoutes };
