import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider'; // Make sure to update the import path if necessary
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const { logOut } = useContext(AuthContext); // Corrected function name
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Sign-out Successfully!!');
                const { from } = location.state || { from: { pathname: '/' } }; // Get the 'from' location or set it to home
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Logout error:', error);
                // Handle logout error if necessary
            });
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 text-white rounded' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
