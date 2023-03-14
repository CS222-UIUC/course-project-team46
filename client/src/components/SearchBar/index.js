/**
 * @description: Box for user to type for search
 */

import { Search, SearchIconWrapper, StyledInputBase } from './style';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.handleSearch(e.target.value);
                    }
                }}
            />
        </Search>
    );
}

export default SearchBar;
