import { React } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import StarRating from '../StarRating';

/**
 * Put `item` into table
 */
function RenderRow(props) {
    const { item } = props;

    return (
        <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>
                <StarRating rating={item.rate} />
            </TableCell>
        </TableRow>
    );
}

export default RenderRow;
