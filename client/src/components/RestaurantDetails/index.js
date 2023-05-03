import {
    Typography,
    Grid,
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from "@mui/material";

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
        if (!detail.restaurant_working_hours) {
            return <Typography>No working hours available.</Typography>;
        }
    
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
            </Box>
        );
    };
    
    

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            <Typography variant="h6" component="div">Website</Typography>
            {detail.restaurant_site ? (
                <Link href={detail.restaurant_site} target="_blank" rel="noopener noreferrer">
                    {detail.restaurant_site}
                </Link>
            ) : (
                <Typography>Not available</Typography>
            )}
    
            <Typography variant="h6" component="div">Phone</Typography>
            <Typography>{detail.restaurant_phone || 'Not available'}</Typography>
    
            <Typography variant="h6" component="div">Address</Typography>
            <Typography>{detail.restaurant_address || 'Not available'}</Typography>
    
            <Grid item xs={12} sm={6} sx={{ paddingRight: '20px' }}>
                <Typography variant="h6" component="div">Working Hours</Typography>
                {renderWorkingHours()}
            </Grid>
    
            <Typography variant="h6" component="div">Description</Typography>
            <Typography>{detail.restaurant_description || 'The owner is too lazy to add a description.'}</Typography>
    
            <Typography variant="h6" component="div">Booking Appointment</Typography>
            {detail.restaurant_booking_appointment_link ? (
                <Link
                    href={detail.restaurant_booking_appointment_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book a table
                </Link>
            ) : (
                <Typography>Not available</Typography>
            )}
        </Box>
    );
};

export default RestaurantDetails;
