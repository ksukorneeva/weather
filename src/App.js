import WeatherInfo from './components/WeatherSide/WeatherInfo';
import './App.scss';
import InfoSide from './components/InfoSide/InfoSide';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [city, setCity] = useState('');
    const [currentCity, setCurrentCity] = useState(null);

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const res = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=1da4b67b2d6a4e42836175222220906&q=${city}&aqi=no`
        );
        setCurrentCity(res.data);
        setCity('');
    };

    return (
        <div className='container'>
            <InfoSide currentCity={currentCity} />
            <WeatherInfo
                submitForm={submitFormHandler}
                setCity={setCity}
                city={city}
            />
        </div>
    );
}

export default App;
