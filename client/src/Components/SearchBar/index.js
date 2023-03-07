import { React, useState } from "react";

import RestaurantList from '../RestaurantList';
import Search from "../Search";

function SearchBar() {
    const [inputText, setInputText] = useState('');

    const handleSearch = (text) => {
        setInputText(text);
    };

    return (
        <div>
            <Search 
                value={inputText}
                onSearch={handleSearch}
            />
            <RestaurantList searchText={inputText} />
        </div>
    );
}

export default SearchBar;
