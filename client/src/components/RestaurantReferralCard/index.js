import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function RestaurantReferralCard(props) {
    const { restaurantData } = props;
    const navigate = useNavigate();

    if (!restaurantData) {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <Box display="flex" alignItems="center" gap={1} mb={1} >
                    <Skeleton variant="circular" width={45} height={45} />
                    <Skeleton variant="rounded" width={100} height={30} />
                </Box>
                <Skeleton variant="rounded" height={194} />
                <Skeleton variant="rounded" height={68} />
                <Skeleton variant="rounded" height={48} />
            </Card>
        );
    }
    
    const handleCardClick = () => {
        navigate(`/restaurant/${restaurantData.restaurant_id}`);
    };

    return (
        <Card sx={{ maxWidth: 345 }} onClick={handleCardClick} >
            <CardHeader
                avatar={
                    <Avatar 
                        alt="Default" 
                        src={restaurantData.restaurant_logo}
                    />
                }
                title={restaurantData.restaurant_name}
                style={{justifyContent: 'flex-start'}}
            />
            <CardMedia
                component="img"
                height="194"
                image={restaurantData.restaurant_photo}
                alt="restaurant photo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {restaurantData.restaurant_description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box />
            </CardActions>
        </Card>
    );
}

export default RestaurantReferralCard;
