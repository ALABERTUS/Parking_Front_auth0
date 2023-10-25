
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Role from "../pages/Role";
import { AuthenticationGuard } from "../auth0/AuthenticationGuard";
import Home from '../Home';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/roles",
                element: <AuthenticationGuard component={Role}/>
                
            },
        ]
    }
]);