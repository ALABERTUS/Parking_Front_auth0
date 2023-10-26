import { Outlet } from "react-router-dom"
import Header2 from "../components/header/Header2"


const Layout = () => {
    return (
        <div>
            <Header2/>     
            
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout