import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../routes/root';
import s from './styles.module.scss';
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeSwitcher: React.FC = () => {
    const body = document.querySelector('body');
    const themeContext = useContext(ThemeContext);

    const { theme, setTheme } = themeContext || {};

    const setDarkMode = () => {
        body?.setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        body?.setAttribute('data-theme', 'light');
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem('currentTheme');
        if (currentTheme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, []); // Run this effect only once during component mount

    const toggleDarkMode = () => {
        if (!setTheme) return;

        setTheme((prev: 'light' | 'dark') => {
            const newTheme = prev === 'light' ? 'dark' : 'light';

            // Update the theme in localStorage
            localStorage.setItem('currentTheme', newTheme);

            // Update the body theme class
            if (newTheme === 'dark') {
                setDarkMode();
            } else {
                setLightMode();
            }

            return newTheme;
        });
    };

    if (!themeContext) {
        return null;
    }

    return (
        <div className={s.themeSwitcher}>
            <input
                type="checkbox"
                id="theme-switcher"
                className="hidden"
                onChange={() => toggleDarkMode()}
                checked={theme === 'dark'}
            />
            <label htmlFor="theme-switcher">
                <BiMoon size={20} className={`${s.moon} ${s.icon}`} />
                <BiSun size={23} className={`${s.sun} ${s.icon}`} />
            </label>
        </div>
    );
};

export default ThemeSwitcher;
