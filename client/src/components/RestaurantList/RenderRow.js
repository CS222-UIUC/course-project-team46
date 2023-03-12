import { React } from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow } from '@material-ui/core';
//import StarRating from '../StarRating';
import Rating from '@mui/material/Rating';

/**
 * Put `restaurantData` into table
 */
function RenderRow(props) {
    const { restaurantData } = props;

    return (
        <TableRow key={restaurantData.restaurant_id}>
            <TableCell>
                <Link to={`/restaurant/${restaurantData.restaurant_id}`}>{restaurantData.restaurant_name}</Link>
            </TableCell>
            <TableCell>
                <Link to={`https://www.google.com/maps/search/${restaurantData.restaurant_address}`}>
                    {restaurantData.restaurant_address}
                </Link>
            </TableCell>
            <TableCell>
                <Rating
                    name={`restaurant-${restaurantData.restaurant_id}-rating`}
                    defaultValue={restaurantData.restaurant_rating}
                    readOnly
                />
            </TableCell>
            <TableCell> {restaurantData.restaurant_type} </TableCell>
        </TableRow>
    );
}

export default RenderRow;
