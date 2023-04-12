import React from 'react';
import { Typography, Grid, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const RestaurantDetails = ({ detail }) => {
    /**
     * @returns Working Hours
     *  format:
     *      Sunday: 10 AM-8:30 PM
     *      Monday: 10 AM-8:30 PM
     *      Tuesday: 10 AM-8:30 PM
     *      Wednesday: 10 AM-8:30 PM
     *      Thursday: 10 AM-8:30 PM
     *      Friday: 10 AM-8:30 PM
     *      Saturday: 10 AM-8:30 PM
     */
    const renderWorkingHours = () => {
        return (
        <Box>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="working hours table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Opening Hours</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Object.entries(detail.restaurant_working_hours).map(([day, hours]) => (
                        <TableRow key={day}>
                        <TableCell>{day}</TableCell>
                        <TableCell>{hours}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }} >
            <Typography variant="h6">Website</Typography>
            <Link href={detail.restaurant_site} target="_blank" rel="noopener noreferrer">
                {detail.restaurant_site}
            </Link>

            <Typography variant="h6">Phone</Typography>
            <Typography>{detail.restaurant_phone}</Typography>

            <Typography variant="h6">Address</Typography>
            <Typography>{detail.restaurant_address}</Typography>

            <Grid item xs={12} sm={6} sx={{ paddingRight: '20px' }}>
                <Typography variant="h6">Working Hours</Typography>
                {renderWorkingHours()}
            </Grid>

            <Typography variant="h6">Description</Typography>
            <Typography>{detail.restaurant_description}</Typography>

            <Typography variant="h6">Booking Appointment</Typography>
            <Link
                href={detail.restaurant_booking_appointment_link}
                target="_blank"
                rel="noopener noreferrer"
            >
            Book a table
            </Link>
        </Box>
    );
};

export default RestaurantDetails;
