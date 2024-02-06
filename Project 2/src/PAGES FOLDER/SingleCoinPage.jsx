
import { useEffect} from "react";
import ShowStore from "../COMPONENTS FOLDER/ShowCoinComponent";
import { useParams } from "react-router-dom";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import NavBar from "../COMPONENTS FOLDER/NavBar";
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function ShowSingleCoin () {

   const store = ShowStore();
   const params = useParams();

useEffect(() =>{

    console.log(params);
    store.fetchData(params.id)

}, [])


if (!store.data) return <></>;

    return(
        <div>
        <Box sx={{marginLeft: '30px', marginTop: '30px'}}>
        <img src={store.data.image.large} style={{ maxWidth: '100px', height: 'auto' }} />
            <header>

              <Typography variant="h4">  {store.data.name} 
                ({store.data.symbol})</Typography>
          
            </header>
        </Box>
        
            <Box sx={{ maxWidth: '1000px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', margin: 'auto' }}>
            <Card style={{ margin: '20px' }}>
        <CardContent>
        <Typography style={{ opacity: 0.5 }}>
      90 Day Forecast
    </Typography>
            <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

            <Card sx={{ width: '90%', margin: '20px auto',  maxWidth: '1800px' }}> 
            <CardContent sx={{
        width: '80%',
        margin: '10px',
        boxSizing: 'border-box' 
    }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Current Price: ${store.data.market_data.current_price.aud}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ width: '90%', margin: '20px auto',  maxWidth: '1800px' }}> 
            <CardContent sx={{
        width: '80%',
        margin: '10px',
        boxSizing: 'border-box' 
    }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    24H High: ${store.data.market_data.high_24h.aud} 
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ width: '90%', margin: '20px auto',  maxWidth: '1800px' }}> 
            <CardContent sx={{
        width: '80%',
        margin: '10px',
        boxSizing: 'border-box' 
    }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    24H Low: ${store.data.market_data.low_24h.aud}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ width: '90%', margin: '20px auto',  maxWidth: '1800px' }}> 
            <CardContent sx={{
        width: '80%',
        margin: '10px',
        boxSizing: 'border-box' 
    }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Market Cap Rank: ${store.data.market_cap_rank}
                    </Typography>
                </CardContent>
            </Card>
        </CardContent>
        
    </Card>
    </Box>
  </div> 

)
} 
            