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

import { getToken, setTokenLS, logout } from "../Authorization/token.js";


export default function Router() {
    let token = getToken()

    if (!token) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path="/" element={<Header getToken={getToken} logout={logout}/>}>
                        <Route path="/home" element={<Home />} />
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
                    <Route path="/" element={<App getToken={getToken}/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setToken={setTokenLS} />} />
            </Routes>
        </BrowserRouter>
    );
}
