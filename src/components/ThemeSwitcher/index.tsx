import React, { useContext } from 'react';
import { ThemeContext } from '../../routes/root';
import s from './styles.module.scss';
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeSwitcher: React.FC = () => {
    const body = document.querySelector('body');

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null;
    }

    const { theme, setTheme } = themeContext;

    const setDarkMode = () => {
        body?.setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        body?.setAttribute('data-theme', 'light');
    };

    const toggleDarkMode = () => {
        setTheme((prev: 'light' | 'dark') => (prev === 'light' ? 'dark' : 'light'));
        theme === 'light' ? setDarkMode() : setLightMode();
    };

    const currentTheme = localStorage.getItem('currentTheme');
    if (currentTheme === 'dark') {
        toggleDarkMode();
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
