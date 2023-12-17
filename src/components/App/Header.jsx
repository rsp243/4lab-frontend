import { Outlet } from 'react-router';
import PropTypes from 'prop-types';

import NavigationBar from './Navbar.jsx';
import Introduction from './Introduction.jsx';

import './src/css/header.css';

export default function Header({ getToken }) {
    return (
        <>
            <header>
                <NavigationBar start={<Introduction />} getToken={getToken} />
            </header>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

Header.propTypes = {
    getToken: PropTypes.func.isRequired
};