import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RestaurantIntroduction from './RestaurantDetailComponents/RestaurantIntroduction.js';
import RatingComponent from './RestaurantDetailComponents/RatingComponent.js';
import CommentList from './RestaurantDetailComponents/CommentList.js';
import AddComment from './RestaurantDetailComponents/AddComment.js';

function RestaurantPage(props) {
    const { id } = props.match.params;

    const [restaurantData, setRestaurantData] = useState({});
    const [comments, setComments] = useState([]);

    // Get a list of restaurant information and reviews from the back end
    useEffect(() => {
        axios.get(`/api/restaurants/${id}`)
            .then(res => {
                setRestaurantData(res.data);
            })
            .catch(err => console.error(err));

        axios.get(`/api/comments/${id}`)
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    // Update rating
    const handleRatingChange = (event, value) => {
        axios.post(`/api/restaurants/${id}/rating`, { rating: value })
            .then(res => {
                setRestaurantData(res.data);
            })
            .catch(err => console.error(err));
    };

    // Add comment
    const handleCommentSubmit = (comment) => {
        axios.post(`/api/comments/${id}`, { comment })
            .then(res => {
                setComments([...comments, res.data]);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <RestaurantIntroduction data={restaurantData} />
            <RatingComponent value={restaurantData.rating} onChange={handleRatingChange} />
            <CommentList comments={comments} />
            <AddComment onSubmit={handleCommentSubmit} />
        </div>
    );
}

export default RestaurantPage;
