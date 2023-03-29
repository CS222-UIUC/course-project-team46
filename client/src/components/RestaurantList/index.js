/**
* @description: List (Table) of restaurant by using `data`
*/

// RestaurantList component
import { Stack, Table, TableHead, TableBody, TableContainer, Box, Pagination } from '@mui/material';

import RestaurantListHeader from './RestaurantListHeader';
import RenderRow from './RenderRow';

function RestaurantList(props) {
    const { restaurantData, page, maxPage, order, orderBy, handleRequestSort, handleChangePage } = props;

    // Determine if there are search results, if not then return a message
    if (restaurantData.length === 0) {
        return (
            <Box>
                <h2>No results found.</h2>
                <p>Sorry, we couldn't find any results.</p>
            </Box>
        );
    }

    return (
        <Stack spacing={2}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <RestaurantListHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    </TableHead>

                    <TableBody>
                        {restaurantData
                            .map((item) => <RenderRow key={`restaurantRow-${item.restaurant_id}`} restaurantData={item} />)}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center">
                <Pagination count={maxPage} page={page} onChange={handleChangePage} />
            </Box>
        </Stack>
    );
}

export default RestaurantList;
