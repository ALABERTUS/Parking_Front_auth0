import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button
            className="auth-button"
            onClick={() => 
            logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            })}
        >Logout</button>
    )
}

export default LogoutButton