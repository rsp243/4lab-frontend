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


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />}/>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
