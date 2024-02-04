import React from "react"
import HomeStore from "../COMPONENTS FOLDER/Home Component"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useUserContext } from "../CONTEXT FOLODER/user Context";
import ShowStore from "../COMPONENTS FOLDER/Show Component";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';


export default function HomePage() {
    const store = HomeStore();
    const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

    useEffect(() => {
        store.APIfetch();
    }, []);

    return (
        <>
        
            <div style={{margin: '10px'}}>Welcome Back! {currentUser.userName}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {store.coins.map(coin => (
                    <Card key={coin.id} style={{ width: '300px' }}sx={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {coin.name}
                            </Typography>
                            {/* You can add more coin info here */}
                            <Typography variant="body2">
                                 {coin.name}
                                 </Typography>
                                 <Typography variant="body2">
                                Current Price: AUD ${coin.priceAUD}
                            </Typography>
                            <Typography variant="body2">
                                BTC Rate: ${coin.priceBTC}
                            </Typography>
                            <Link to={`/${coin.id}`} style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', marginTop: '10px' }}>
                            <Button variant="contained" color="primary"sx={{ marginTop: '20px' }}>
        Learn More
    </Button>
                            </Link>
                          
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}





// export default function HomePage () {

// const store = HomeStore()

//     useEffect(() => {
// store.APIfetch()

//     }, [])


//     return(
//         <>
//         {/* <header><NavBar></NavBar></header> */}
//         <div>HOME PAGE</div>
//         <div>
//             {store.coins.map(coin=>{
//                 return(
//                     <div key={coin.id}>
//                         <Link to={`/${coin.id}`}>
//                             {coin.name}
//                         </Link>
//                         </div>
//                 )
//             })}

//         </div>

//         </>

//     )
// }