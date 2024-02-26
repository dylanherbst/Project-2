import { create } from 'zustand'
import axios from 'axios'


const apiKey = 'CG-aapqN6JHoG5aBVXzKYgGdFKn'; 
const HomeStore = create((set) => ({
   
    coins: [],

    APIfetch: async () => {
const [res, btcRes] = await Promise.all ([
    axios.get(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${apiKey}`),
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud&x_cg_demo_api_key=${apiKey}`)

     // API Fetch options without use of key
    // axios.get('https://api.coingecko.com/api/v3/search/trending'),
    // axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud')
   
])

const btcPrice = btcRes.data.bitcoin.aud;

        const coins = res.data.coins.map(coin => {
            return {
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBTC: (coin.item.price_btc).toFixed(8),
                priceAUD: (coin.item.price_btc * btcPrice).toFixed(8),

            }
        })

        set({coins})


        console.log(coins)
    
    }
   }))


   export default HomeStore

