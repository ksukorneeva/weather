import React from 'react';
import { ReactComponent as RusFlag } from './img/rus.svg';
import { ReactComponent as USAFlag } from './img/usa.svg';
import './Countries.scss';

const Countries = ({ changeLanguage }) => {
    return (
        <div className='countries'>
            <RusFlag onClick={() => changeLanguage('ru')} />
            <USAFlag onClick={() => changeLanguage('en')} />
        </div>
    );
};

export default Countries;
