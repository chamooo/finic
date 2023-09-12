// global layout of the app
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Solid from '../UI/Solid';
import TextInput from '../UI/TextInput';
import React, { createContext, useState, useEffect } from 'react';
import { ModalProvider } from '../components/ModalContext';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const Root: React.FC = () => {
    const currentTheme = localStorage.getItem('currentTheme') as Theme;
    const [theme, setTheme] = useState<ThemeContextType['theme']>(currentTheme);
    useEffect(() => {
        localStorage.setItem('currentTheme', theme);
    }, [theme]);
    const contextValue: ThemeContextType = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <ModalProvider>
                <div className="flex">
                    <Sidebar />
                    <Header />
                    <Solid>
                        <TextInput id="search" name="search" label="Search here" />
                    </Solid>
                </div>
            </ModalProvider>
        </ThemeContext.Provider>
    );
};

export default Root;
