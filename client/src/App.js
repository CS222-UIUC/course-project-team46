import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import NotFoundPage from './pages/NotFoundPage';

import data from './data/restaurants.json';
import detail from './data/restaurant_data.json';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage restaurantsData={data} />} />
                <Route exact path="/restaurant/:id" element={<RestaurantDetailPage detailData={detail} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
