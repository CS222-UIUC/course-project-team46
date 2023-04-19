import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

function RestaurantReferralCard(props) {
    const { restaurantData } = props;
    const navigate = useNavigate();

    if (!restaurantData) {
        return <div>Loading...</div>;
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default RestaurantReferralCard;
