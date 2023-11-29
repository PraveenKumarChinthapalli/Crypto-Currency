import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,volume,change,market}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src = {image} alt= "crypto" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'></p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Rs.{price}</p>
                    {change < 0 ?(
                        <p className="coin-percent red">{change.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{change.toFixed(2)}%</p>
                    )
                    }
                    <p className="coin-market">
                    Mkt Cap: Rskdlk.{market.toLocaleString()}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Coin