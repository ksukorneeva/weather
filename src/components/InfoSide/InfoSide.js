import React from 'react';
import './InfoSide.scss';
import { ReactComponent as Location } from './img/location.svg';
import { Trans } from 'react-i18next';

const InfoSide = ({ currentCity, week, activeDay }) => {
    console.log();
    return (
        <div className='weather-side'>
            <div className='weather-gradient'></div>
            <div className='date-container'>
                <h2 className='date-dayname'>
                    <Trans>
                        {
                            week[
                                new Date(
                                    currentCity.forecast.forecastday[
                                        activeDay
                                    ].date
                                ).getDay()
                            ]
                        }
                    </Trans>
                </h2>
                <span className='date-day'>
                    {String(
                        new Date(
                            currentCity.forecast.forecastday[activeDay]
                                .date_epoch * 1000
                        )
                    ).slice(8, 11)}
                    {String(
                        new Date(
                            currentCity.forecast.forecastday[activeDay]
                                .date_epoch * 1000
                        )
                    ).slice(4, 7)}
                    {String(
                        new Date(
                            currentCity.forecast.forecastday[activeDay]
                                .date_epoch * 1000
                        )
                    ).slice(10, 15)}
                </span>
                <Location className='icon-location' />
                <span className='location'>
                    {currentCity?.location.name},{' '}
                    {currentCity?.location.country}
                </span>
            </div>
            <div className='weather-container'>
                <img
                    className='icon-rain'
                    src={
                        currentCity.forecast.forecastday[activeDay].day
                            .condition.icon
                    }
                    alt={
                        currentCity.forecast.forecastday[activeDay].day
                            .condition.text
                    }
                />
                <h1 className='weather-temp'>
                    {Math.floor(
                        currentCity.forecast.forecastday[activeDay].day
                            .avgtemp_c
                    )}
                    °C
                </h1>
                <h3 className='weather-desc'>
                    {
                        currentCity.forecast.forecastday[activeDay].day
                            .condition.text
                    }
                </h3>
            </div>
        </div>
    );
};

export default InfoSide;
