import { Avatar, Box, Typography, Grid, Rating } from "@mui/material";

import LikeDislikeActions from "../LikeDislikeActions";

function SingleComment(props) {
    const { commitData, restaurantId } = props;

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
                <LikeDislikeActions
                    initialScore={commitData.score}
                    commentId={commitData.commits_id}
                    restaurantId={restaurantId}
                />
            </Grid>
        </Grid>
    );
}

export default SingleComment;
