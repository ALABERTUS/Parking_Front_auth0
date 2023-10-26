import { useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './ReserveDetails.css'

const ReservaDetalles = () => {
    const { date } = useParams(); 
    const location = useLocation();
    const roleReceived = location.state?.role || 'default'; 
    //console.log("Received role in ReservaDetails:", roleReceived);
    
    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    //const [usuarios, setUsuarios] = useState(role); // Initialize usuarios with role
    
    
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/solicitudesreservas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fecha: date,
                    usuarios: roleReceived,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setShowSuccessMessage(true); 
            } else {
                console.error("Error reserving:", data.error);
            }
        } catch (error) {
            console.error("Error calling the API:", error);
        }
    };
    //console.log("Received role in ReservaDetails:", roleReceived);
    //console.log("Location in ReserveDetails:", location);
    
    const closePopup = () => {
        setIsPopupVisible(false);  
        console.log("Inside closePopup");

    };
    
    console.log("Rendering ReserveDetails. isPopupVisible:", isPopupVisible, "showSuccessMessage:", showSuccessMessage);

    return (
        <div >
            <Navbar role={roleReceived} />
            {isPopupVisible && (
            <div className='reverse-container'>
                <div className='reverse-details'>
                    <h2 className="user-btn">Información de reserva</h2>
                    <h3 className="user-btn">Usuarios:{roleReceived}</h3>
                    <div className="user-btn">Date: {date}</div>
                   
                    <button className="user-btn" onClick={handleSubmit}>Submit</button>
                    {showSuccessMessage && (
                            <>
                                <div className="success-message">¡Reserva realizada con éxito!</div>
                                <button className="user-btn" onClick={closePopup}>Close</button>
                            </>
                        )}
                </div>
            </div>
        )}

     
    </div>
);
}


export default ReservaDetalles;