import './App.css';

import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";

// Examples

// HomePage:                http://localhost:3000/
// RestaurantDetailPage:    http://localhost:3000/restaurant/123456
// SearchPage:              http://localhost:3000/search?q=qwerty
// NotFoundPage:            http://localhost:3000/something/else

function App() {
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        // Check if there is user information in localStorage
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            // If so, parse it as a JavaScript object and set it to the current user
            setUser(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogin = (userData, remember) => {
        // Storing user information to localStorage
        if (remember) {
            localStorage.setItem('userData', JSON.stringify(userData));
        }

        setUser(userData);
        navigate("/");
    };

    const handleLogout = () => {
        // @todo Add logout logic here
        // Remove user information from localStorage
        localStorage.removeItem('userData');

        setUser(null);

        navigate("/login");
    };

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage user={user} handleLogout={handleLogout} />} />
                <Route exact path="/restaurant/:id" element={<RestaurantDetailPage user={user} handleLogout={handleLogout} />} />
                <Route exact path="/search" element={<SearchPage user={user} handleLogout={handleLogout} />} />
                <Route exact path='/login' element={<LoginPage handleLogin={handleLogin} />} />
                <Route exact path='/register' element={<RegisterPage handleLogin={handleLogin} />} />
                <Route exact path='/forgot-password' element={<ForgotPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
