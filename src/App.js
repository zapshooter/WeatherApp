import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './componenets/TopButtons';
import Inputs from './componenets/Inputs'
import TimeandLocation from './componenets/TimeandLocation'
import TemperatureandDetails from './componenets/TemperatureandDetails'
import Forecast from './componenets/Forecast'
import getFormattedWeatherData from './services/weatherService';

function App() {
  const fetchWeather= async () =>{
    const data= await getFormattedWeatherData({q: "london"});
    console.log(data);
  };
  
  
  
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br from bg-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeandLocation />
      <TemperatureandDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;