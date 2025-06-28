import React from 'react';
import {useWeather} from "../context/Weather.jsx";

function Input(){
    const Weather = useWeather();
    console.log("Weather " , Weather);
    return (
        <input className="input-field" placeholder='Seacrh here' value={Weather.searchCity} onChange={(e) => {Weather.setSearchCity(e.target.value)}}></input>
    )
}

export default Input;