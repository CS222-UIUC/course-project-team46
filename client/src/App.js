import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

import data from './data/restaurants.json';
import detail from './data/restaurant_data.json';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage restaurantsData={data} />} />
                <Route exact path="/restaurant/:id" element={<RestaurantDetailPage detailData={detail} />} />
                <Route exact path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
