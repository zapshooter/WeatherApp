import React from 'react'

function Forecast(title) {
  return (
    <div>
        <div className="flex items-center justify-start my-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />

        <div className="flex flex-row items-center justify-between text-white">

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">04:30 AM
                </p>
                <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" 
                className="w-12 my-1" alt="" />
                <p className="font-medium">22</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">04:30 AM
                </p>
                <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" 
                className="w-12 my-1" alt="" />
                <p className="font-medium">22</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">04:30 AM
                </p>
                <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" 
                className="w-12 my-1" alt="" />
                <p className="font-medium">22</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">04:30 AM
                </p>
                <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" 
                className="w-12 my-1" alt="" />
                <p className="font-medium">22</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">04:30 AM
                </p>
                <img src="https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png" 
                className="w-12 my-1" alt="" />
                <p className="font-medium">22</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast