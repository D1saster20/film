import React, { useEffect } from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const darkmode = () => {
        const body = document.body;
        const isDarkmode = localStorage.getItem('darkmode') === 'true';

        body.classList.toggle('dark-mode', !isDarkmode);
        localStorage.setItem('darkmode', isDarkmode ? 'false' : 'true');
    };

    useEffect(() => {
        document.body.classList.toggle(
            'dark-mode',
            localStorage.getItem('darkmode') === 'true'
        );
    }, []);

    return (
        <div>
            <div className={css.Header}>
                <NavLink className={css.link} to={'/'}>movies</NavLink>
                <NavLink className={css.link} to={'/genre'}>genres</NavLink>
                <NavLink className={css.link} to={'/search'}>search</NavLink>
                <div className={css.log}>
                <button className={css.btn} onClick={darkmode}>
                    darkmode
                    {localStorage.getItem('darkmode') === 'true' }
                </button>
                <div className={css.user}>Y</div>
                </div>
            </div>
        </div>
    );
};

export { Header };