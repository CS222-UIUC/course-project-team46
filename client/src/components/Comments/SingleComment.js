import React from "react";
import { Avatar, Box, Typography, Grid, Rating, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function SingleComment(props) {
    const { commitData } = props;

    const handleLike = () => {
        console.log("Liked!");
        commitData.score += 1;
        // @todo Logic to implement the like function
      };
    
      const handleDislike = () => {
        console.log("Disliked!");
        commitData.score -= 1;
        // @todo Logic to implement the dislike function
      };

    return (
        <Grid container alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
            <Grid item>
                <Avatar alt="Default" src={commitData.user_avatar} />
            </Grid>
            <Grid item xs>
                <Typography variant="subtitle1">
                    {commitData.username}
                </Typography>
                <Box>
                    <Rating
                        name={`restaurant-${commitData.commits_id}-rating`}
                        defaultValue={commitData.user_rate}
                        precision={0.1}
                        readOnly
                    />
                    <Typography variant="caption" color="text.secondary">
                        {commitData.createdAt}
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {commitData.detail}
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                        {commitData.score}
                    </Typography>
                    <IconButton size="small" onClick={handleLike}>
                        <ThumbUpIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={handleDislike}>
                        <ThumbDownIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SingleComment;
