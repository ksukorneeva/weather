import React from 'react';
import { ReactComponent as Search } from '../../WeatherSide/img/search.svg';
import { Trans, useTranslation } from 'react-i18next';

const SearchForm = ({ id, type, placeholder, setCity, city, submitForm }) => {
    const { t } = useTranslation();
    return (
        <form
            className='location-container'
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='form-field'>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                />

                <label htmlFor='city'>{t('City')}</label>

                {city && <Search className='btn-icon' onClick={submitForm} />}
            </div>
        </form>
    );
};

export default SearchForm;
