import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

export default function NavigationBar({start}) {
    const logout = <a href="/logout"><Button label="Logout" icon="pi pi-fw pi-sign-out" /></a>

    const items = [
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
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} start={start} end={logout} />
        </div>
    )
}