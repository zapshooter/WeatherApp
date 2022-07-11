import { DateTime } from "luxon";

const API_KEY="cc2088a270b7619c84190874c60551e2";
const BASE_URL='https://api.openweathermap.org/data/2.5'


const getWeatherdata=(infoType, searchParams) => {
    const url =new URL( BASE_URL +'/'+ infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
    .then((rest) => rest.json())
}

const formatCurrentWeather=(data) => {
    const{
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys:{country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const{main: details, icon} = weather[0]

    return{ lat, lon,temp,feels_like, temp_min, temp_max,
    humidity,name,dt,country,sunrise,sunset,details,icon,speed}
};

const formattedForecasrWeather=(data) => {
    let {timezone, daily, hourly} =data;
    daily = daily.slice(1,6).map(d=> {
        return{
            title: formatLocalTime(d.dt, timezone, 'cccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(d=> {
        return{
            title: formatLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });


    return{timezone, daily, hourly};
}

const getFormattedWeatherData=async (searchParams) => {
    const formattedCurrentWeather = await getWeatherdata
    ('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon}= formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherdata('onecall',{
        lat, lon, exclude : 'current,minute,alerts', 
        units: searchParams.units,
    }).then(formattedForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather}
};

const formatLocalTime=(secs,zone,format="cccc, dd, lll,yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).
setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>  `https://w7.pngwing.com/pngs/574/179/png-transparent-day-forecast-sun-sunny-weather-the-weather-is-nice-today-icon.png`

export default getFormattedWeatherData