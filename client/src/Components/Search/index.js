import { React, useState } from "react";

import RestaurantList from '../RestaurantList';
import SearchBar from "../SearchBar";

function Search() {
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

    return (
        <div>
            <SearchBar 
                value={inputText}
                onSearch={handleSearch}
            />
            <RestaurantList
                searchText={inputText}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Search;
