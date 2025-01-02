import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
            city: "Sample-City",
            feelsLike: 24.04,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 60.0,
            weather: "mist" 
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div className='weatherApp'>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
