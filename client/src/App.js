import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import data from './data/restaurants.json';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage restaurantsData={data} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
