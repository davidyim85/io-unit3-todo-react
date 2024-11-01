import { Link } from "react-router-dom";
import { signOut } from "../services/authService";

const NavBar = (props) => {

    return (
        <nav>
            <ul>
                {props.token ?

                    <li>
                        <Link onClick={() => {
                            signOut()
                            props.setToken(null)
                        }}>
                            sign out
                        </Link>
                    </li>

                    :
                    <>
                        <li>
                            <Link to='/signin'>
                                sign in
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup'>
                                sign up
                            </Link>
                        </li>
                    </>
                    //if there is a user token i just want a sign out link
                    //if there is no user token, i want a sign in and sign out link
                }
            </ul>
        </nav>
    )
}

export default NavBar