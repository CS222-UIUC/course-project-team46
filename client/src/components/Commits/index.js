import { React } from 'react';

import { Box } from '@mui/material';

/**
 * @todo 
 *      1. component for user to put in commit and submit
 *      2. component to display commitList
 */
function Commits(props) {
    const { commitList } = props;

    // 
    return (
        <Box
            sx={{
                paddingBottom: 2,
                textAlign: 'left'
            }}
        >
            <h3>Commits</h3>
            {commitList
                .map((item) => {
                    return (
                        <span key={item.commits_id}>
                            <br />
                            {item.commits_id} | {item.user_id} | {item.detail}
                            <br />
                        </span>
                    )
                })}
        </Box>
    );
}

export default Commits;
