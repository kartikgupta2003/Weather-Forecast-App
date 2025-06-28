import React from 'react';
import { useWeather } from '../context/Weather';

function Card(){
    const Weather = useWeather();
    return(
        <div className='card'>
            <img src={Weather.data?.current?.condition.icon}></img>
            {(Weather.data?.current) ? (<h2>{Weather.data.current.temp_c} &deg; C</h2>): (<></>)}
            {(Weather.data?.location) ? (<h5>{Weather.data.location.name} , {Weather.data.location.region} , {Weather.data.location.country}</h5>) : (<></>)}
            <h5>{Weather.data?.location?.localtime}</h5>
        </div>
    )
}

export default Card;