import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetail from "./components/TempAndDetail";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtonPanel from "./components/TopButtonPanel";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {

  const[query,setQuery] = useState({q:'Noida'})
  const[units,setUnits] = useState('metric')
  const[weather,setWeather] = useState(null)

  const getWeather = async()=>{
   await getFormattedWeatherData({...query,units}).then(data =>{
    setWeather(data)
   });
  }

  useEffect(()=>{
    getWeather();
  },[query,units])
  getWeather();
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-gray-400">
      <TopButtonPanel />
      <Inputs />

      {weather && (<>
      <TimeAndLocation weather={weather}/>
      <TempAndDetail weather={weather}/>
      <Forecast title = "3 hour step forecast" data={weather.hourly}/>
      <Forecast title="daily forecast" data={weather.daily}/>

      </>)}
    </div>
  );
};

export default App;
