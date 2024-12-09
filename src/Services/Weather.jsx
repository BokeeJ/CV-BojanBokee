import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    //    TEMPERATURA TREBA PREVOD
    const [temperature, setTemperature] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Koristi Axios za slanje GET zahteva
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Lazarevac,RS&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
                );
                setTemperature(response.data.main.temp);
            } catch (err) {
                console.error('Error fetching weather data:', err);

                setError(err.message);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className="text-center p-4">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : temperature !== null ? (
                <p className="text-blue-500 font-bold lg:text-2xl">Temperatura našem Lazarevcu: <span className='text-orange-300'>{temperature}°C</span></p>
            ) : (
                <p>Učitavanje temperature...</p>
            )}
        </div>
    );
};

export default Weather;
