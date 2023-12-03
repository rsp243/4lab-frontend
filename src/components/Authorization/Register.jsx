import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h1>Register form</h1>
            <p>Already have an account?</p>
            <Link to='/login'>Login</Link>
            <Link to='/'>To Start Page</Link>
        </div>
    )
}
