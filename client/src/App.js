import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";

import data from './data/restaurants.json';
import detail from './data/restaurant_data.json';

// Examples

// HomePage:                http://localhost:3000/
// RestaurantDetailPage:    http://localhost:3000/restaurant/123456
// SearchPage:              http://localhost:3000/search?q=qwerty
// NotFoundPage:            http://localhost:3000/something/else

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage restaurantsData={data} />} />
                <Route exact path="/restaurant/:id" element={<RestaurantDetailPage detailData={detail} />} />
                <Route exact path="/search" element={<SearchPage />} />
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/register' element={<RegisterPage />} />
                <Route exact path='/forgot-password' element={<ForgotPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
