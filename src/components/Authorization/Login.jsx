import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h1>Login form</h1>
            <p>For the first time in our system?</p>
            <Link to='/register'>Register</Link>
            <Link to='/'>To Start Page</Link>
        </div>
    )
}
