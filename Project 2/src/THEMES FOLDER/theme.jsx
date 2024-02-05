import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#673AB7', // Google Blue '#1a73e8'
      },
      secondary: {
        main: '#fbbc05', // Google Yellow
      },
      error: {
        main: '#ea4335', // Google Red
      },
      warning: {
        main: '#fbbc05', // Google Yellow
      },
      info: {
        main: '#34a853', // Google Green
      },
      success: {
        main: '#34a853', // Google Green
      },
      background: {
        default: '#fff', // White background
        paper: '#fff',
      },
      text: {
        primary: '#202124', // Dark gray for text
        secondary: '#5f6368', // Medium gray for secondary text
      },
    },
    typography: {
      fontFamily: 'Google Sans, Roboto, Arial, sans-serif', // Google's font
      // Add other typography customizations here
    },
    shape: {
      borderRadius: 16, // Google uses slightly rounded edges
    },
    // Add other theme customizations here
  });

export default theme