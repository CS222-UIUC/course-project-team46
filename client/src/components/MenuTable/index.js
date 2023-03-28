// MenuTable.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@mui/material';

const MenuTable = ({ menu }) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    // change to '/api/restaurant/:id/menu?sortField=${orderBy}&sortOrder=${order}'
    //      when api is finished
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedMenu = menu.sort((a, b) => {
        if (order === 'asc') {
            return a[orderBy] < b[orderBy] ? -1 : 1;
        } else {
            return a[orderBy] > b[orderBy] ? -1 : 1;
        }
    });

    return (
        <TableContainer component={Paper}>
            <Table aria-label="menu table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                        <TableSortLabel
                            active={orderBy === 'dish_name'}
                            direction={orderBy === 'dish_name' ? order : 'asc'}
                            onClick={createSortHandler('dish_name')}
                        >
                            Dish Name
                        </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                        <TableSortLabel
                            active={orderBy === 'dish_price'}
                            direction={orderBy === 'dish_price' ? order : 'asc'}
                            onClick={createSortHandler('dish_price')}
                        >
                            Price
                        </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                        <TableSortLabel
                            active={orderBy === 'recommand_numebr'}
                            direction={orderBy === 'recommand_numebr' ? order : 'asc'}
                            onClick={createSortHandler('recommand_numebr')}
                        >
                            Rating
                        </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedMenu.map((row) => (
                        <TableRow key={row.dish_id}>
                            <TableCell component="th" scope="row">
                                {row.dish_name}
                            </TableCell>
                            <TableCell align="right">{row.dish_price.toFixed(2)}</TableCell>
                            <TableCell align="right">{row.recommand_numebr.toFixed(1)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
    };

    export default MenuTable;
