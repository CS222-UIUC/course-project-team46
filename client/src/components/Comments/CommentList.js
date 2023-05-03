import React from "react";
import { Box } from "@mui/material";

import SingleComment from "./SingleComment";

function CommentList(props) {
    const { commitList, restaurantId } = props;
    
    return (
        <Box sx={{ mt: 4 }}>
            {commitList.map((commit) => (
                <SingleComment 
                    key={commit.commits_id} 
                    commitData={commit} 
                    restaurantId={restaurantId}
                />
            ))}
        </Box>
      );
};

export default CommentList;
