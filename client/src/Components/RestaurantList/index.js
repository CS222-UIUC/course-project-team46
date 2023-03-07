import { React, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, TablePagination } from '@material-ui/core';
import data from './restaurant-data.json';
import StarRating from '../StarRating';
import RestaurantListHeader from '../RestaurantListHeader'

function RestaurantList(props) {
    const { searchText, page, setPage } = props;
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('rate');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const filteredData = data.filter((el) => {
        if (searchText === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(searchText)
        }
    });

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
                <RestaurantListHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                
                <TableBody>
                    {stableSort(filteredData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => renderRow(item))}
                </TableBody>
                
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => setRowsPerPage(event.target.value)}
                />
            </Table>
        </TableContainer>
        </div>
    );
}

export default RestaurantList;
