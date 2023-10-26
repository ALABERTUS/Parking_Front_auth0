import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button 
            className="auth-button"
            onClick={() => {
            loginWithRedirect({
                appState: {
                    returnTo: window.location.pathname
                }
            })
        }}
        >Log in</button>
    )
} 

export default LoginButton