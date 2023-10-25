import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                {isAuthenticated ? ( <LogoutButton /> ) : (
                    <>
                    <LoginButton />
                    </>
                )}
            </nav>
        </div>
    )
}

export default Header