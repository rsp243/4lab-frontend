import { Outlet } from 'react-router';

import NavigationBar from './Navbar.jsx';
import Introduction from './Introduction.jsx';

import './src/css/header.css';

export default function Header() {
    return (
        <header>
            <NavigationBar start={<Introduction />} />
            <Outlet />  
        </header>
    );
}
