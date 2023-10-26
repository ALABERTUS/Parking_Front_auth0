import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css'; // Importa el archivo CSS

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            onClick={() => {
                loginWithRedirect({
                    appState: {
                        returnTo: window.location.pathname
                    }
                })
            }}
            className="login-button" // Aplica la clase de estilo CSS
        >
            Log in
        </button>
    );
}

export default LoginButton;
