import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid, Link, Checkbox, FormControlLabel, Avatar, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useUserContext } from '../CONTEXT FOLODER/user Context';
import theme from '../THEMES FOLDER/theme';
// Import other necessary components like Avatar, LockOutlinedIcon, CssBaseline
const defaultTheme = createTheme();

function LoginForm() {
       const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

        const handleSubmit = (e) => {
                    e.preventDefault();
                    if (userPassword.length < 5) {
                        setSubmitResult('Password must be at least 5 chars long');
                    } else if (userPassword === userEmail) {
                        setSubmitResult('Password must not match email address');
                    } else {
                        setSubmitResult('Successful login.');
                        handleUpdateUser({ email: userEmail, userName: userName }); // context function
                    }
                }
    
        if (currentUser && currentUser.email) {
            return (
         
                <Box    sx={{
                    height: '100vh', // Full viewport height
                    display: 'flex',
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'center', // Center content horizontally
                    padding: 0,
                    margin: 0,
                    boxSizing: 'border-box', // Include padding and borders
                    // Add any additional styling
                }}>

                <ThemeProvider theme={theme}>
                    <Container sx={{marginTop: '40px', marginLeft: '40px'}}>
                    <Typography variant="h6">Welcome {currentUser.userName}!</Typography>
        
        <Button variant="contained" color="primary" onClick={() => handleLogOut({})}>
            Log Out
        </Button>
                    </Container>
                </ThemeProvider>
                </Box>
              
            );
        }
    
        return (
            <>
            <Box    sx={{
            height: '100vh', // Full viewport height
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center', // Center content horizontally
            padding: 0,
            margin: 0,
            boxSizing: 'border-box', // Include padding and borders
            // Add any additional styling
        }}>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#673AB7' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                               <Typography component="h1" variant="h5"></Typography>
       
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                            />
                    <Button
             
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2,  backgroundColor: '#673AB7', 
                        '&:hover': {
                          backgroundColor: '#5c319f' }}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Container>
            <Box mt={8} mb={4} align="center">
                <Typography variant="body2" color="text.secondary">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        Dylan Herbst Project 2
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </ThemeProvider>
        </Box>
        </>
        )}

    
    

export default LoginForm;


// function LoginForm() {
//     const [userEmail, setUserEmail] = useState('');
//     const [userName, setUserName] = useState('');
//     const [userPassword, setUserPassword] = useState('');
//     const [submitResult, setSubmitResult] = useState('');
//     // destructure the context values passed via UserProvider

//     const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

//     // alternative using the useContext hook directly, either works
//     //const {currentUser, handleUpdateUser} = useContext(UserContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (userPassword.length < 5) {
//             setSubmitResult('Password must be at least 5 chars long');
//         } else if (userPassword === userEmail) {
//             setSubmitResult('Password must not match email address');
//         } else {
//             setSubmitResult('Successful login.');
//             handleUpdateUser({ email: userEmail, userName: userName }); // context function
//         }
//     }

    

//     {/* if the user is already logged in, show msg instead of form */ }
//     if (currentUser && currentUser.email) return (
//         <>
       
//         {/* <NavBar></NavBar> */}
//         <p>Welcome {currentUser.userName}!</p>
     
//             <button onClick={() => handleLogOut({})}>Log Out</button>
//         </>
//     );
//     // otherwise render same form as previously, no changes

//     return <>
//         <form onSubmit={handleSubmit}>
//         <label>Name: <input value={userName} onChange={(e) => setUserName(e.target.value)} /></label><br />
//             <label>Email: <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /></label><br />
        
//             <label>Password: <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /></label><br />
       
//             <button type="submit">Login</button>
//         </form>
//     </>
// }
// export default LoginForm