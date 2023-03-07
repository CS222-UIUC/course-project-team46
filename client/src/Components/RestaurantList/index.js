import { React, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableSortLabel } from '@material-ui/core';
import data from './restaurant-data.json';
import StarRating from '../StarRating';

function RestaurantList(props) {
    const { searchText } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('rate');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const renderRow = (item) => {
        return (
        <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>
            <StarRating rating={item.rate} />
            </TableCell>
        </TableRow>
        );
    };

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
        return -1;
        }
        if (b[orderBy] > a[orderBy]) {
        return 1;
        }
        return 0;
    };

    return (
        <div>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>
                    Name
                </TableCell>
                <TableCell>
                    Address
                </TableCell>
                <TableCell sortDirection={orderBy === 'rate' ? order : false}>
                    Rating
                    <TableSortLabel
                    active={orderBy === 'rate'}
                    direction={order}
                    onClick={(event) => handleRequestSort(event, 'rate')}
                    />
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {stableSort(data, getComparator(order, orderBy))
                .filter((el) => {
                    if (searchText === '') {
                    return el;
                    } else {
                    return el.name.toLowerCase().includes(searchText)
                    }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => renderRow(item))}
            </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={(event, newPage) => setPage(newPage)}
                onChangeRowsPerPage={(event) => setRowsPerPage(event.target.value)}
            />
        </TableContainer>
        </div>
    );
  
}

export default RestaurantList;
