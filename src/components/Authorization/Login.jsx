import { Link } from "react-router-dom";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Login() {
    return (
        <div className="h-full flex flex-column md:flex-row vertical-center">
            <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 pt-3">
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label className="w-6rem">Username</label>
                    <InputText id="username" type="text" className="w-12rem" />
                </div>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label className="w-6rem">Password</label>
                    <InputText id="password" type="password" className="w-12rem" />
                </div>
                <Button label="Login" icon="pi pi-sign-in" className="w-10rem mx-auto"></Button>
            </div>
            <div className="w-full md:w-2">
                <Divider layout="vertical" className="hidden md:flex">
                    <b>OR</b>
                </Divider>
                <Divider layout="horizontal" className="flex md:hidden" align="center">
                    <b>OR</b>
                </Divider>
            </div>
            <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center py-5 gap-2">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
                <Button label="To Main Page" icon="pi pi-home" className="w-10rem"></Button>
            </div>
        </div>
    )
}
