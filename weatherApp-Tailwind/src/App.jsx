import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetail from "./components/TempAndDetail";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtonPanel from "./components/TopButtonPanel";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {

  const getWeather = async()=>{
    const data =  await getFormattedWeatherData({q:'Noida'});
    console.log(data);
  }
  getWeather();
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-gray-400">
      <TopButtonPanel />
      <Inputs />
      <TimeAndLocation/>
      <TempAndDetail/>
      <Forecast/>
      <Forecast/>
    </div>
  );
};

export default App;
