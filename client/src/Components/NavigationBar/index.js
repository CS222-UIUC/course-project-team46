import { React } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './style.css'

function NavigationBar(props) {
  return (
    <AppBar position="static" className="NavigationBar-root" marginTop="-64px">
        <Toolbar>
            <Box marginLeft="1rem">
                <Typography variant="h6" component="div">
                    Home 
                </Typography>
            </Box>
            <Box marginLeft="1rem">
                <Typography variant="h6" component="div">
                    Recommendations
                </Typography>
            </Box>
            <Box marginLeft="1rem">
                <Typography variant="h6" component="div">
                    ...
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
