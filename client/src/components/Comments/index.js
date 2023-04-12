import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

/**
 * @todo 
 *      1. component for user to put in commit and submit
 *      2. component to display commitList
 */
function Comments(props) {
    const { user, commitList } = props;

    const [currentComment, setCurrentComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for submitting the new comment
    };

    return (
        <Box sx={{ mt: 4, paddingBottom: 2, textAlign: 'left' }}>
            <Typography variant="h6">Comments</Typography>

            <CommentForm
                user={user}
                currentComment={currentComment}
                setCurrentComment={setCurrentComment}
                handleSubmit={handleSubmit}
            />
            <CommentList commitList={commitList} />
        </Box>
    );
}

export default Comments;
