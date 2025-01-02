import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState('');

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getWeatherInfo = async () => {
        try {
            const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const jsonRes = await res.json();
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            }     
            return result ;     
        } catch (error) {
            console.error("Failed to fetch weather info:", error);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!city.trim()) {
            console.warn("City name is empty!");
            return;
        }
        console.log("Fetching weather for city:", city);
        setCity('');
        let newInfo = await  getWeatherInfo();
        updateInfo(newInfo);
    };

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                
                <Button variant="contained" type='submit' size="large" className='btn'style={{margin: "5px 0 0 10px"}} >
                    Search
                </Button>
            </form>
        </div>
    );
}
