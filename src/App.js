// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';

const App = ()=>{
  const [coin,setCoins] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => {
      setCoins(response.data)
      console.log(response.data)
      console.log('success')
    })
    .catch(error => {
      console.log('error')
    })
  },[])
  const handleChange = (event) =>{
    setSearch(event.target.value)
    console.log(event.target.value)
  }
  const filteredCoins = coin.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action=''> 
          <input type='text' className='coin-input' placeholder="Enter the coin name" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin=>{
        return(
          <Coin
          key = {coin.id}
          name = {coin.name}
          image = {coin.image}
          symbols = {coin.symbol}
          market={coin.market_cap}
          price={coin.current_price}
          change={coin.price_change_percentage_24h}
          />
        );
      })}
      
    </div>
  );
}

export default App;
