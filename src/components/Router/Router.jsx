import { useState } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import App from "../../Pages/App";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import NotFound from "./NotFound";
import Header from '../App/Header.jsx';
import Register from "../Authorization/Register.jsx";
import Login from "../Authorization/Login.jsx";

function getToken() {
    let token = sessionStorage.getItem('token');
    return token;
}

function setTokenLS(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    getToken()
}

export default function Router() {
    let token = getToken()
    
    if (!token) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path="/" element={<Header getToken={getToken}/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setTokenLS} />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" element={<Header getToken={getToken}/>}>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setToken={setTokenLS} />} />
            </Routes>
        </BrowserRouter>
    );
}
