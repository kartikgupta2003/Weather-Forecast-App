const baseUrl= "https://api.weatherapi.com/v1/current.json?key=61173f0e2f314e98874144321252706"

export const getWeatherDataForCity = async(city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes` , {method : "GET"})
    // ye kam background me hota hai fetch karne ka that's why async await is used 
    return await response.json();
    // ye json respose ko parse karta hai and also ek promise return karta hai so we must use await here 
}

export const getWeatherDataForLocation = async(lat,lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes` , {method : "GET"})
    return await response.json();
}