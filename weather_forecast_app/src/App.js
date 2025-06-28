import './App.css';
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Card from "./components/Card.jsx";
import { useWeather } from './context/Weather.jsx';
import { useEffect } from 'react';

function App() {
  const Weather = useWeather();
  console.log(Weather);

  useEffect(()=>{
    // get current location here 
    Weather.fetchCurrentUserLocationData();
  } , [])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={Weather.fetchData} value="Search" />
      <Card/>
      <Button onClick={Weather.fetchCurrentUserLocationData} value="Refresh"/>
    </div>
  );
}

export default App;
