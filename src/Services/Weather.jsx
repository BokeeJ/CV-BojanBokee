import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const Weather = () => {
    const { t } = useTranslation()
    //    TEMPERATURA TREBA PREVOD
    const [temperature, setTemperature] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Koristi Axios za slanje GET zahteva
                const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Koristi Vite env varijablu
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Lazarevac,RS&units=metric&appid=${apiKey}`
                );
                setTemperature(Math.round(response.data.main.temp));
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
                <p className="text-blue-500 font-bold lg:text-2xl">{t('Weather')}: <span className='text-orange-300'>{temperature}°C</span></p>
            ) : (
                <p>Učitavanje temperature...</p>


            )}
        </div>
    );
};

export default Weather;

// temperaturu srediti...
// flex wrap 