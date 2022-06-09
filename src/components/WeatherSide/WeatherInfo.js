import React from 'react';
import './WeatherInfo.scss';
import { ReactComponent as Search } from './img/search.svg';

const WeatherInfo = ({ setCity, submitForm, city }) => {
    return (
        <div className='info-side'>
            <div className='today-info-container'>
                <div className='today-info'>
                    <div className='precipitation'>
                        <span className='title'>PRECIPITATION</span>
                        <span className='value'>0 %</span>
                        <div className='clear'></div>
                    </div>
                    <div className='humidity'>
                        <span className='title'>HUMIDITY</span>
                        <span className='value'>34 %</span>
                        <div className='clear'></div>
                    </div>
                    <div className='wind'>
                        <span className='title'>WIND</span>
                        <span className='value'>0 km/h</span>
                        <div className='clear'></div>
                    </div>
                </div>
            </div>
            <div className='week-container'>
                <ul className='week-list'>
                    <li className='active'>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#rain'></use> */}
                        </svg>
                        <span className='day-name'>Tue</span>
                        <span className='day-temp'>29°C</span>
                    </li>
                    <li>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#cloud'></use> */}
                        </svg>
                        <span className='day-name'>Wed</span>
                        <span className='day-temp'>21°C</span>
                    </li>
                    <li>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#rain'></use> */}
                        </svg>
                        <span className='day-name'>Thu</span>
                        <span className='day-temp'>08°C</span>
                    </li>
                    <li>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#rain'></use> */}
                        </svg>
                        <span className='day-name'>Fry</span>
                        <span className='day-temp'>19°C</span>
                    </li>
                    <li>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#cloud'></use> */}
                        </svg>
                        <span className='day-name'>Sat</span>
                        <span className='day-temp'>19°C</span>
                    </li>
                    <li>
                        <svg className='icon-card'>
                            {/* <use xlink:href='img/sprites.svg#cloud'></use> */}
                        </svg>
                        <span className='day-name'>Sun</span>
                        <span className='day-temp'>19°C</span>
                    </li>
                    <div className='clear'></div>
                </ul>
            </div>
            <form
                className='location-container'
                onSubmit={(e) => e.preventDefault()}
            >
                <div className='form-field'>
                    <input
                        id='city'
                        type='text'
                        placeholder=' '
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <label htmlFor='city'>City</label>

                    <Search className='btn-icon' onClick={submitForm} />
                </div>
            </form>
        </div>
    );
};

export default WeatherInfo;
