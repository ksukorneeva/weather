import React, { useEffect, useState } from 'react';
import './InfoSide.scss';
import { ReactComponent as Location } from './img/location.svg';

const InfoSide = ({ currentCity }) => {
    const [currentDate, setCurrentDate] = useState(null);
    const week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    const dateReverse = () => {
        const date = currentCity?.location.localtime;
        console.log(date);
        return setCurrentDate(
            date.split(' ')[0].split('-').reverse().join('.')
        );
    };

    const getWeekDay = () => {
        const day = new Date(currentDate).getDay() - 1;
        return week[day];
    };

    return (
        <div className='weather-side'>
            <div className='weather-gradient'></div>
            <div className='date-container'>
                <h2 className='date-dayname'>{getWeekDay()}</h2>
                <span className='date-day'>{dateReverse}</span>
                <Location className='icon-location' />
                <span className='location'>
                    {currentCity?.location.name},{' '}
                    {currentCity?.location.country}
                </span>
            </div>
            <div className='weather-container'>
                <img
                    className='icon-rain'
                    src={currentCity?.current.condition.icon}
                    alt={currentCity?.current.condition.text}
                />
                <h1 className='weather-temp'>
                    {currentCity?.current.temp_c}°C
                </h1>
                <h3 className='weather-desc'>
                    {currentCity?.current.condition.text}
                </h3>
            </div>
        </div>
    );
};

export default InfoSide;
