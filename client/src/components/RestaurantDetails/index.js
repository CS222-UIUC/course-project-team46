// RestaurantDetails.js
import React from 'react';
import { Typography, Grid, Link } from '@mui/material';

const RestaurantDetails = ({ detail }) => {
    const renderWorkingHours = () => {
        return Object.entries(detail.restaurant_working_hours).map(([day, hours]) => (
            <Typography key={day} variant="body2">
                {day}: {hours}
            </Typography>
        ));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Website</Typography>
                <Link href={detail.restaurant_site} target="_blank" rel="noopener noreferrer">
                    {detail.restaurant_site}
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Phone</Typography>
                <Typography>{detail.restaurant_phone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Address</Typography>
                <Typography>{detail.restaurant_address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Working Hours</Typography>
                {renderWorkingHours()}
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Description</Typography>
                <Typography>{detail.restaurant_description}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Booking Appointment</Typography>
                <Link
                    href={detail.restaurant_booking_appointment_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book a table
                </Link>
            </Grid>
        </Grid>
    );
};

export default RestaurantDetails;
