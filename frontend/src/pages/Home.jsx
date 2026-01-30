import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div className="container">
            <h1>Welcome to the App</h1>
            <p>This is the home page.</p>
            <div className="links">
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="btn">Login</Link>
                        <Link to="/signup" className="btn">Signup</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
