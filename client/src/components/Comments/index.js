import { useState } from 'react';
import axios from 'axios';

import { Box, Typography } from '@mui/material';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

/**
 * @todo 
 *      1. component for user to put in commit and submit
 *      2. component to display commitList
 */
function Comments(props) {
    const { user, commitList, restaurantId, restaurantRating, setUpdateComment } = props;

    const [userRate, setUserRate] = useState(restaurantRating);
    const [currentComment, setCurrentComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/restaurant/${restaurantId}/add-comment`, {
                user,
                userRate,
                currentComment,
            });
    
            if (response.data) {
                // Add the new comment to the UI or refresh the comments list
                setCurrentComment("");
                setUpdateComment(true);
            } else {
                alert("Error submitting the comment");
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting the comment");
        }
    };
    

    return (
        <Box sx={{ mt: 4, paddingBottom: 2, textAlign: 'left' }}>
            <Typography variant="h6">Comments</Typography>

            <CommentForm
                user={user}
                currentComment={currentComment}
                setCurrentComment={setCurrentComment}
                handleSubmit={handleSubmit}
                userRate={userRate}
                setUserRate={setUserRate}
            />
            <CommentList 
                commitList={commitList} 
                restaurantId={restaurantId}
            />
        </Box>
    );
}

export default Comments;
