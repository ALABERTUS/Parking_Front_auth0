import { useAuth0 } from "@auth0/auth0-react";
import { useState , useEffect } from "react";
import axios from "axios";
const Role = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const updateEventList = async () => {
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: "https://ParkingAPI"
                    }
                })
                console.log(token)
                const response = await axios.get(
                    `${"http://localhost:8080/api/v1/roles"}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setRoles(response.data);
                console.error(response.data);
            }
            catch (error) {
                console.error(error);
            }
        };
        updateEventList()
    }, [getAccessTokenSilently]);

  return (
    <div>      
    {
        roles.map((role) =>
            <div key={role.id}>
                <div>
                    <h5>Title: {role.nombreRol}</h5>
                </div>
            </div>
        )
    }
</div>
  );
}

export default Role;
