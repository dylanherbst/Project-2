import { useState } from "react";
import { useUserContext } from "../CONTEXT FOLODER/user Context";
import Button from '@mui/material/Button';
import { Card, CardContent, Typography, Box } from '@mui/material';


export default function ProfilePage () {

    const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();



    return(
        <>
          <Box 
        sx={{
            height: '100vh', // Full viewport height
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center', // Center content horizontally
            padding: 0,
            margin: 0,
            boxSizing: 'border-box', // Include padding and borders
            // Add any additional styling
        }}
    >
        <h1>Your Account</h1>

        <Card sx={{ width: '90%', margin: '20px auto',  maxWidth: '1800px' }}> 
            <CardContent sx={{
        width: '80%',
        margin: '10px',
        boxSizing: 'border-box' // Corrected from 'box-sizing' to 'boxSizing'
    }}>
                    <Typography variant="h7" sx={{ fontWeight: 'bold' }}>
                    <h2>{currentUser.userName}</h2>
        <h3>{currentUser.email}</h3>
        <Button 
    variant="contained" 
    color="primary" 
    sx={{ marginTop: '20px' }}
    onClick={() => handleLogOut({})} // Place onClick here
>
    Log Out
</Button>
                       </Typography>
                </CardContent>
            </Card>
            </Box>
        </>
    )
}
