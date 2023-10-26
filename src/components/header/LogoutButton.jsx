import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.css'; // Importa el archivo CSS

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button
            onClick={() => {
                logout({
                    returnTo: window.location.origin
                });
            }}
            className="logout-button" // Aplica la clase de estilo CSS
        >
            Log out
        </button>
    );
}

export default LogoutButton;
