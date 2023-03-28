// RestaurantDetailPageTabs.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import RestaurantDetails from '../../components/RestaurantDetails';
import MenuTable from '../../components/MenuTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const RestaurantDetailPageTabs = ({ detail, menu }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="restaurant tabs"
                >
                    <Tab label="Details" {...a11yProps(0)} />
                    <Tab label="Menu" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <RestaurantDetails detail={detail} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MenuTable menu={menu} />
            </TabPanel>
        </Box>
    );
};

export default RestaurantDetailPageTabs;
