import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Rating } from '@mui/material';

/**
 * Put `restaurantData` into table
 */
function RenderRow(props) {
    const { restaurantData } = props;

    return (
        <TableRow key={restaurantData.restaurant_id}>
            <TableCell>
                <MuiLink component={Link} to={`/restaurant/${restaurantData.restaurant_id}`} color="inherit" underline="none">
                    {restaurantData.restaurant_name}
                </MuiLink>
            </TableCell>
            <TableCell>
                <MuiLink href={`https://www.google.com/maps/search/${restaurantData.restaurant_address}`} color="inherit" underline="none">
                    {restaurantData.restaurant_address}
                </MuiLink>
            </TableCell>
            <TableCell>
                <Rating
                    name={`restaurant-${restaurantData.restaurant_id}-rating`}
                    defaultValue={restaurantData.restaurant_rating}
                    precision={0.1}
                    readOnly
                />
            </TableCell>
            <TableCell> {restaurantData.restaurant_type} </TableCell>
        </TableRow>
    );
}

export default RenderRow;
