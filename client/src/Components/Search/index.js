import { React, useState } from "react";

import RestaurantList from '../RestaurantList';
import SearchBar from "../SearchBar";

function Search() {
    const [inputText, setInputText] = useState('');
    const [page, setPage] = useState(0);

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
