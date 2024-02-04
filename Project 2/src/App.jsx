import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './ROUTES FOLDER/App Routes'
import NavBar from './COMPONENTS FOLDER/NavBar'
import { UserProvider } from './CONTEXT FOLODER/user Context'
import { ThemeProvider } from '@mui/material/styles';
import theme from './THEMES FOLDER/theme'

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
