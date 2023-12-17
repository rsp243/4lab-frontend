import { useState } from 'react';
import { useNavigate } from 'react-router'

import PropTypes from 'prop-types';
import { Menubar } from 'primereact/menubar';

export default function NavigationBar({start, getToken, logout}) {
    const navigate = useNavigate()
    const token = getToken()

    const notAuthorizedItems = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: "/home",
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: "/about",
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Register',
                    icon: 'pi pi-fw pi-user-plus',
                    url: "/register",
                },
                {
                    label: 'Login',
                    icon: 'pi pi-fw pi-sign-in',
                    url: "/login",
                },
            ]
        },
    ];

    const items = [
        {
            label: 'Main Page',
            icon: 'pi pi-fw pi-table',
            url: "/",
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: "/home",
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: "/about",
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Logout',
                    icon: 'pi pi-fw pi-user-minus',
                    command: () => logout(navigate),
                },
            ]
        },
    ];

    if (!token) {
        return (
            <div className="card w-full">
                <Menubar model={notAuthorizedItems} start={start} />
            </div>
        )        
    }
    return (
        <div className="card w-full">
            <Menubar model={items} start={start} />
        </div>
    )   
}

NavigationBar.propTypes = {
    getToken: PropTypes.func.isRequired
};
