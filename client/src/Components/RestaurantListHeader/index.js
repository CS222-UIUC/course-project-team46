import { React } from 'react';
import { TableCell, TableRow, TableSortLabel } from '@material-ui/core';

function RestaurantListHeader(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableRow>
      <TableCell>
        Name
        <TableSortLabel
          active={orderBy === 'name'}
          direction={orderBy === 'name' ? order : 'asc'}
          onClick={createSortHandler('name')}
        />
      </TableCell>
      <TableCell>
        Address
        <TableSortLabel
          active={orderBy === 'address'}
          direction={orderBy === 'address' ? order : 'asc'}
          onClick={createSortHandler('address')}
        />
      </TableCell>
      <TableCell>
        Rating
        <TableSortLabel
          active={orderBy === 'rate'}
          direction={orderBy === 'rate' ? order : 'asc'}
          onClick={createSortHandler('rate')}
        />
      </TableCell>
    </TableRow>
  );
}

export default RestaurantListHeader;
