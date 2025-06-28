import { createContext , useContext , useState} from "react";
import {getWeatherDataForCity , getWeatherDataForLocation} from "../api/index.js";
const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props)=>{
    const [data , setData] = useState(null);
    const [searchCity , setSearchCity] = useState(null);

    const fetchData =()=>{
        getWeatherDataForCity(searchCity).then((res)=>{
            setData(res);
            // ya to hum yha par async-await use kare ya .then 
            // dono ka kaam same hi hota hai — dono Promise ke resolve hone ka wait karte hain. 
        })
    }

    const fetchCurrentUserLocationData = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            // position contains the latitude and longitude of user'position
            getWeatherDataForLocation(position.coords.latitude , position.coords.longitude).then((res)=>{
                setData(res);
            })
        })
    }
    // hamne is function me searchCity isliye nhi pass kiya bcz searchCity is a state variable and In React, the scope of a state variable is limited to the component it is declared in.
    return (
        <WeatherContext.Provider value={{data , searchCity , setSearchCity , fetchData , fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}