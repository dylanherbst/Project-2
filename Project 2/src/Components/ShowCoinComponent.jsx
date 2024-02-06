import axios from "axios";
import { create } from 'zustand'

const apiKey = 'CG-aapqN6JHoG5aBVXzKYgGdFKn'; 

const ShowCoin = create ((set) =>({
    graphData: [],
    data: null,

    fetchData: async (id) => {
const [graphRes, dataRes] = await Promise.all([
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=30&x_cg_demo_api_key=${apiKey}`),
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true&x_cg_demo_api_key=${apiKey}`)

    // API fetch option without key
    // axios.get ( `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=30`),
    // axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
])

        const graphData = graphRes.data.prices.map((price) => {
            const [time, p] = price;
            const date = new Date(time).toLocaleDateString("en-AU", { 
                timeZone: "Australia/Perth", 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            });

            return {
                Date: date,
                Price: p,
              };
            
            });

            set({graphData, data: dataRes.data})
    },

}));

export default ShowCoin