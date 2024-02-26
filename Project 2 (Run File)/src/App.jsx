import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import NavBar from './Components/NavBar'
import { UserProvider } from './Context/UserContext'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes/theme'

function App() {
 

  return (
    <>
    <ThemeProvider theme={theme}>
<UserProvider>
<NavBar></NavBar>
      <AppRoutes>
      </AppRoutes>
      </UserProvider>
      </ThemeProvider>
    </>
  )
}

export default App
