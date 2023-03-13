import './Homepage.css';

import { React, useState } from "react";

import AppBar from '../../components/AppBar'
import Box from '@mui/material/Box';
import RestaurantList from '../../components/RestaurantList'

function HomePage(props) {
    const { restaurantsData } = props;
    // user input
    const [inputText, setInputText] = useState('');
    // current user page
    const [page, setPage] = useState(0);

    /**
     * Called when the text in box change
     * 
     * @param {*} text new test that user input
     */
    const handleSearch = (text) => {
        setInputText(text);
        setPage(0);
    };
    
    // get restaurants contaions `searchText`
    const filteredData = restaurantsData.filter((el) => {
        if (!el) {
            return false;
        }
        if (inputText === '') {
            return el;
        } else {
            return el.restaurant_name.toLowerCase().includes(inputText);
        }
    });

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <AppBar 
                    handleSearch={handleSearch}
                />
                <Box sx={{ mt: 8 }}>
                    <RestaurantList
                        data={filteredData}
                        page={page}
                        setPage={setPage}
                    />
                </Box>
                
            </header>
        </div>
    );
}

export default HomePage;
