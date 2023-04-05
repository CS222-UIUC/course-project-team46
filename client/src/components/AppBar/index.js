import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SearchBar from '../SearchBar';
import Logo from '../Logo';
import NavMenu from '../NavMenu';
import UserMenu from '../UserMenu';

const pages = [''];

function ResponsiveAppBar(props) {
    const { user, handleLogout } = props;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Keeps at the top when scrolling up and down
    // zIndex: ensure that it is always above other elements
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />

                    {/* Style for small screan */}
                    <NavMenu 
                        handleOpenNavMenu={handleOpenNavMenu}
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                        pages={pages}
                    />

                    <Box sx={{ flexGrow: 0 }}> 
                        <SearchBar />
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu 
                            handleOpenUserMenu={handleOpenUserMenu}
                            anchorElUser={anchorElUser}
                            handleCloseUserMenu={handleCloseUserMenu}
                            user={user}
                            handleLogout={handleLogout}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
