import React from "react";
import { Box } from "@mui/material";

import SingleComment from "./SingleComment";

function CommentList(props) {
    const { commitList } = props;
    
    return (
        <Box sx={{ mt: 4 }}>
            {commitList.map((commit) => (
                <SingleComment key={commit.commits_id} commitData={commit} />
            ))}
        </Box>
      );
};

export default CommentList;
