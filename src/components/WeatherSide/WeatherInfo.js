import React from 'react';
import './WeatherInfo.scss';
import SearchForm from '../UI/Search/SearchForm';

const WeatherInfo = ({
    setCity,
    submitForm,
    city,
    currentCity,
    activeDay,
    setActiveDay,
}) => {
    return (
        <div className='info-side'>
            <div className='today-info-container'>
                <div className='today-info'>
                    <div className='precipitation'>
                        <span className='title'>PRECIPITATION</span>
                        <span className='value'>
                            {
                                currentCity.forecast.forecastday[activeDay].day
                                    .totalprecip_in
                            }{' '}
                            %
                        </span>
                        <div className='clear'></div>
                    </div>
                    <div className='humidity'>
                        <span className='title'>HUMIDITY</span>
                        <span className='value'>
                            {
                                currentCity.forecast.forecastday[activeDay].day
                                    .avghumidity
                            }{' '}
                            %
                        </span>
                        <div className='clear'></div>
                    </div>
                    <div className='wind'>
                        <span className='title'>WIND</span>
                        <span className='value'>
                            {
                                currentCity.forecast.forecastday[activeDay].day
                                    .maxwind_kph
                            }{' '}
                            km/h
                        </span>
                        <div className='clear'></div>
                    </div>
                </div>
            </div>
            <div className='week-container'>
                <ul className='week-list'>
                    {currentCity.forecast.forecastday.map((day, index) => (
                        <li
                            className={index === activeDay ? 'active' : ''}
                            key={index}
                            onClick={() => setActiveDay(index)}
                        >
                            <img
                                src={day.day.condition.icon}
                                className='icon-card'
                            />

                            <span className='day-name'>
                                {String(new Date(day.date_epoch * 1000)).slice(
                                    0,
                                    3
                                )}
                            </span>
                            <span className='day-temp'>
                                {Math.floor(day.day.avgtemp_c)}°C
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <SearchForm
                id='city'
                type='text'
                placeholder=' '
                setCity={setCity}
                city={city}
                submitForm={submitForm}
            />
        </div>
    );
};

export default WeatherInfo;
