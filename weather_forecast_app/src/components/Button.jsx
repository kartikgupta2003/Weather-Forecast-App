import React from 'react';
import { useWeather } from '../context/Weather.jsx';

function Button(props){
    const Weather = useWeather();
    return (
        <button className="btn" onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;