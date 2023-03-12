import './Homepage.css';

import { React, useState } from "react";

import Search from '../../components/Search'
import AppBar from '../../components/AppBar'
import SearchBar from "../../components/SearchBar";
// import NavigationBar from '../../components/NavigationBar';

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

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <AppBar 
                    handleSearch={handleSearch}
                />
                <Search 
                    restaurantsData={restaurantsData}
                    inputText={inputText}
                    page={page}
                    setPage={setPage}
                />
            </header>
        </div>
    );
}

export default HomePage;
