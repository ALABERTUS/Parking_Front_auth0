import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'; // Importa el archivo CSS

const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div className="header-container">
            <nav>
                <Link to="/">
                    <h1 className="header-title">PARKING RANDSTAD</h1>
                    <div className="header-logo">
                        <img src="src/pics/logo.png" alt="Parking Image" />
                    </div>
                    
                </Link>
                <div>
                {isAuthenticated ? ( <LogoutButton /> ) : (
                    <>
                    <LoginButton />
                    </>
                )}
                </div>
            </nav>
        </div>
    );
}

export default Header;