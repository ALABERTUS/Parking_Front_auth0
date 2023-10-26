import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo2 from '/src/pics/logo2.svg';
import { BiMenu } from 'react-icons/Bi';
import { AiOutlineClose } from 'react-icons/ai';

import './Header2.css';

const Header2 = () => {
    const { isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log("Is menu open:", isOpen);
    }, [isOpen]);

    
    return (
        <nav>
            <div className="logo">
                <img src={logo2} alt="Logo" />
            </div>
            
            <div className="menu-toggle" onClick={toggleMenu}>
                {isOpen ?
                    
                    <AiOutlineClose size={48} color="white" /> :
                    <BiMenu size={48} color="white" />
                    
                }
            </div>
    
            <div className={`menu ${isOpen ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/roles">Role</Link>
                
                {isAuthenticated ? (
                    <LogoutButton />
                ) : (
                    <LoginButton />
                )}
            </div>
        </nav>
    
    )
                }
export default Header2;