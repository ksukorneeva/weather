import WeatherInfo from './components/WeatherSide/WeatherInfo';
import './App.scss';
import InfoSide from './components/InfoSide/InfoSide';
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/UI/Search/SearchForm';
import IsLoading from './components/UI/IsLoading/IsLoading';
import Countries from './components/Countries/Countries';
import { useTranslation } from 'react-i18next';

function App() {
    const [city, setCity] = useState('');
    const [currentCity, setCurrentCity] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const [activeDay, setActiveDay] = useState(0);
    const { i18n } = useTranslation();

    const submitFormHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=1da4b67b2d6a4e42836175222220906&q=${city}&days=7&aqi=no&alerts=no`
        );
        setCurrentCity(res.data);
        setIsLoading(false);
        setCity('');
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    if (isLoading) {
        return <IsLoading />;
    }

    return (
        <div className='container'>
            {currentCity ? (
                <>
                    <InfoSide
                        currentCity={currentCity}
                        week={week}
                        activeDay={activeDay}
                    />
                    <WeatherInfo
                        submitForm={submitFormHandler}
                        setCity={setCity}
                        city={city}
                        currentCity={currentCity}
                        activeDay={activeDay}
                        setActiveDay={setActiveDay}
                    />
                </>
            ) : (
                <SearchForm
                    id='city'
                    type='text'
                    placeholder=' '
                    setCity={setCity}
                    city={city}
                    submitForm={submitFormHandler}
                />
            )}
            <Countries changeLanguage={changeLanguage} />
        </div>
    );
}

export default App;
