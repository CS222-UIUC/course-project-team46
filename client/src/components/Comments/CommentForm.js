import React from "react";
import { Box, TextField, Button } from "@mui/material";

function CommentForm(props) {
    const { user, currentComment, setCurrentComment, handleSubmit } = props;

    if (!user) {
        return <p>Please login first before leave a comment.</p>
    }
    
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                fullWidth
                label="Add a comment"
                value={currentComment}
                onChange={(e) => setCurrentComment(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit Comment
            </Button>
        </Box>
    );
};

export default CommentForm;
