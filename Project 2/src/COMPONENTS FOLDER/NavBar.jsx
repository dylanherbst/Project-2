import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


export default function NavBar() {

return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Your site title or logo can go here */}
            <CurrencyBitcoinIcon style={{ fontSize: 40, marginTop: 10}} /> 
        </Typography>
        <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>
            Home
        </NavLink>
        <NavLink to="/profile" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>
            Profile
        </NavLink>
        <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
            Login
        </NavLink>
    </Toolbar>
</AppBar>
);
}
{/* <header>
<nav className="NavBar" >
<div className="menu">
<NavLink to="/"> Home </NavLink>
<NavLink to="/profile"> Profile </NavLink>
<NavLink to="/login"> Login </NavLink>
</div> 
</nav>
</header> */}
// )
// }