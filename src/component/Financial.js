import React from 'react'
import Sidebar from '../sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Monitor() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>
                        Financial
                    </Typography>
                </Box>
            </Box>

        </>

    )
}
