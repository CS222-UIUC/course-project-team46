/**
* @description: List (Table) of restaurant by using `data`
*/

import { React, useState } from 'react';
import { Table, TableHead , TableBody, TableFooter, TableContainer, TableRow, TablePagination } from '@mui/material';

import RestaurantListHeader from './RestaurantListHeader.js'
import RenderRow from './RenderRow.js'

function RestaurantList(props) {
    const { data, page, setPage } = props;
    
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('rate');

    /**
     * Sort by data in `property` column
     * 
     * Called when user click any sort button
     * 
     * @param {*} event 
     * @param {*} property name / address / rate
     */
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Determine if there are search results, if not then return a message
    if (data.length === 0) {
        return (
            <div>
                <h2>No results found.</h2>
                <p>Sorry, we couldn't find any results that matched your search criteria.</p>
            </div>
        );
    }
    
    /**
     * Sort array depends on `comparator`
     * 
     * @param {*} array 
     * @param {*} comparator 
     * @returns 
     */
    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    };

    /**
     * `comparator` for stableSort function
     * 
     * @param {*} order asc / desc
     * @param {*} orderBy name of property
     * @returns 
     */
    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    /**
     * 
     * @param {*} a 
     * @param {*} b 
     * @param {*} orderBy name of property
     * 
     * @returns {int} positive when a < b, negative when a > b
     */
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
                    <RestaurantListHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                </TableHead>

                <TableBody>
                    {stableSort(data, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item) => <RenderRow key={`restaurantRow-${item.restaurant_id}`} restaurantData={item} />)}
                </TableBody>
                
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 50]}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(event, newPage) => setPage(newPage)}
                            onRowsPerPageChange={(event) => setRowsPerPage(event.target.value)}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </div>
    );
}

export default RestaurantList;
