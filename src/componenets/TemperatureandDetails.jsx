import React from 'react'
import {
  UilArrorUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons"

function TemperatureandDetails() {
  return (
    <div>

      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" className="w-20" />
        
        <p className="text-5xl"> 34</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={19} className="mr-1" />
            Real fell;
          <span className="font-medium ml-1">32</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={19} className="mr-1" />
            Humidty;
            <span className="font-medium ml=1">50%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={19} className="mr-1" />
            Wind Speed;
            <span className="font-medium al-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">6:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">7:45 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:<span className="font-medium ml-1">40</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">30</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  )
}

export default TemperatureandDetails