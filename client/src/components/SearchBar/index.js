/**
 * @description: Box for user to type for search
 */

import React from 'react';
import { TextField } from '@material-ui/core';

function SearchBar(props) {
    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={(e) => props.onSearch(e.target.value)}
        />
    );
}

export default SearchBar;
