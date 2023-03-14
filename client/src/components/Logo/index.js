import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

function Logo(props) {
    return (
        <>
            {/* Logo */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, mr: 1 }} />
            {/* Name */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex', lg: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'left',
                }}
            >
                Name
            </Typography>

            {/* Mobile version */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Name
            </Typography>
        </>
    );
}

export default Logo;
