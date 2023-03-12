import { React } from 'react';
import { TableCell, TableRow, TableSortLabel } from '@material-ui/core';

function RestaurantListHeader(props) {
    const { order, orderBy, onRequestSort } = props;

    /**
     * called when user click any sort buttom
     * 
     * @param {*} property 
     */
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableRow>
            <TableCell>
                Name
                <TableSortLabel
                    active={orderBy === 'restaurant_name'}
                    direction={orderBy === 'restaurant_name' ? order : 'asc'}
                    onClick={createSortHandler('restaurant_name')}
                />
            </TableCell>
            <TableCell>
                Address
                <TableSortLabel
                    active={orderBy === 'restaurant_address'}
                    direction={orderBy === 'restaurant_address' ? order : 'asc'}
                    onClick={createSortHandler('restaurant_address')}
                />
            </TableCell>
            <TableCell>
                Rating
                <TableSortLabel
                    active={orderBy === 'restaurant_rating'}
                    direction={orderBy === 'restaurant_rating' ? order : 'asc'}
                    onClick={createSortHandler('restaurant_rating')}
                />
            </TableCell>
            <TableCell>
                Type
            </TableCell>
        </TableRow>
    );
}

export default RestaurantListHeader;
