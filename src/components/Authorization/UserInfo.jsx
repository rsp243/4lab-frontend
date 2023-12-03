import { Link } from "react-router-dom";

export default function Logout() {
    return (
        <div className="">
            <h1>Are you sure you want to log out?</h1>
            <Link to="/">Yes</Link>
            <Link to="/">No</Link>
        </div>
    )
}
