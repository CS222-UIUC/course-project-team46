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
        <TableRow key={restaurantData.id}>
            <TableCell>{restaurantData.name}</TableCell>
            <TableCell><Link to={`https://www.google.com/maps/search/${restaurantData.address}`}>{restaurantData.address}</Link></TableCell>
            <TableCell>
                <Rating
                    name={`restaurant-${restaurantData.id}-rating`}
                    defaultValue={restaurantData.rate}
                    readOnly
                />
            </TableCell>
        </TableRow>
    );
}

export default RenderRow;
