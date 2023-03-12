import { React } from "react";

import RestaurantList from '../RestaurantList';

function Search(props) {
    const { restaurantsData , inputText , page , setPage } = props;

    return (
        <div>
            <RestaurantList
                searchText={inputText}
                data={restaurantsData}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Search;
