import Navbar1 from '../components/Navbar1';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MisSolicitudes = () => {
  const location = useLocation();
  const roleFromState = location.state?.role;
  
  return (
  <>
    <Navbar1 role={roleFromState} />
    <div className="user-wrapper">
        <div className='user-link'>
    <Link to="/user/missolicitudes" className="user-btn">08/11/2023</Link>      
    <Link to={`/user/solicitarreserva/${roleFromState}`} className="user-btn">SOLICITAR RESERVA</Link>
    <p className="user-btn">edusanchez@gamil.com</p>
                        <p className="user-btn">12/10/2023</p>
                        <p className="user-btn">SOTANO 1</p>
                        <p className="user-btn">PLAZA 23</p>
                        <p className="user-btn">Cancelar solicitud</p>
    
    </div>
    </div>
  </>
    
  )
}

export default MisSolicitudes