import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

export default function Login({ setToken }) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const msgs = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        let credentials = {
            name,
            password
        }
        msgs.current.clear();
        axios.post(`http://localhost:8080/api/v1/auth/login`, credentials)
            .then(res => {
                console.log(res.status);
                console.log(res.data);
                setToken(res.data.token);
                msgs.current.show([
                    { sticky: false, life: 2000, severity: 'success', summary: 'Success', detail: 'Successfully logged in', closable: false },
                ])
                setTimeout(() => {
                    navigate('/', { replace: true })
                }, 2000)
            })
            .catch(function (error) {
                let myError = "";
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    myError = error.response.data.status + " " + error.response.data.message
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    myError = "An error during request setting up has happened"
                }
                msgs.current.show([
                    { severity: 'error', life: 5000, summary: 'Error', detail: myError, sticky: false, closable: false }
                ]);
            });
    }

    return (
        <div className="h-full flex flex-column md:flex-row vertical-center">
            <form className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 pt-3" onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label className="w-6rem">Username</label>
                    <InputText id="username" type="text" className="w-12rem" onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label className="w-6rem">Password</label>
                    <InputText id="password" type="password" className="w-12rem" onChange={e => setPassword(e.target.value)} />
                </div>
                <Button type="submit" label="Login" icon="pi pi-sign-in" className="w-10rem mx-auto"></Button>
                <Messages ref={msgs} />
            </form>

            <div className="w-full md:w-2">
                <Divider layout="vertical" className="hidden md:flex">
                    <b>OR</b>
                </Divider>
                <Divider layout="horizontal" className="flex md:hidden" align="center">
                    <b>OR</b>
                </Divider>
            </div>
            <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center py-5 gap-2">
                <a href="/register"><Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem" /></a>
                <a href="/"><Button label="To Main Page" icon="pi pi-home" className="w-10rem" /></a>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
