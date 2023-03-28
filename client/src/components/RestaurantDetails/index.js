// RestaurantDetails.js
import React from 'react';
import { Typography, Grid, Link } from '@mui/material';

const RestaurantDetails = ({ detail }) => {
    const renderWorkingHours = () => {
        return Object.entries(detail.working_hours).map(([day, hours]) => (
            <Typography key={day} variant="body2">
                {day}: {hours}
            </Typography>
        ));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Website</Typography>
                <Link href={detail.site} target="_blank" rel="noopener noreferrer">
                    {detail.site}
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Phone</Typography>
                <Typography>{detail.phone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Address</Typography>
                <Typography>{detail.full_address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Working Hours</Typography>
                {renderWorkingHours()}
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Description</Typography>
                <Typography>{detail.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Booking Appointment</Typography>
                <Link
                    href={detail.booking_appointment_link}
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
