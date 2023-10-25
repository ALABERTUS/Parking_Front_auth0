import { Auth0Provider } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

function Auth0ProviderWithNavigate({children}) {
    const domain = "dev-qrdzrd5bq4myvfse.us.auth0.com";
    const clientId = "Xzzd95zk899HtZa0ESa3hwX0M8wxlzVg";
    const redirectUri = window.location.origin;

    const OnRedirectCallback = (appState) => {
        <Navigate to={appState?.returnTo || window.location.pathname}/>
    };

    if (!(domain && clientId && redirectUri)){
        return null;
    }

    return(
        <Auth0Provider
            domain="dev-qrdzrd5bq4myvfse.us.auth0.com"
            clientId="Xzzd95zk899HtZa0ESa3hwX0M8wxlzVg"
            authorizationParams={{
                audience: "https://ParkingAPI",
                redirect_uri: window.location.origin
            }}
            onRedirectCallback={OnRedirectCallback}>
                {children}
            </Auth0Provider>
    )
}

Auth0ProviderWithNavigate.propTypes = {
    children: PropTypes.object
}

export default Auth0ProviderWithNavigate