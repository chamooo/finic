import React, { useState } from 'react';
import s from './styles.module.scss';
import { HiMiniLanguage } from 'react-icons/hi2';
import { BsCheck } from 'react-icons/bs';
import Dropdown from '../../UI/Dropdown';
const LanguageSwitcher: React.FC = () => {
    const langs: string[] = ['ua', 'en'];
    const [currentLang, setCurrentLang] = useState('en');
    const switchLang = (e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        setCurrentLang(target.getAttribute('data-lang') || 'en');
    };
    return (
        <div className={s.languageSwitcher}>
            <Dropdown trigger={<HiMiniLanguage size={20} />}>
                <ul className="flex flex-col gap-1">
                    {langs.map((lang: string, i: number) => {
                        return (
                            <li
                                key={i}
                                className="icon-button flex items-center gap-3"
                                onClick={(e) => switchLang(e)}
                                data-lang={lang}>
                                <label htmlFor={lang} className="uppercase">
                                    {lang}
                                </label>
                                <input type="radio" id={lang} name="language" className="hidden" />
                                {currentLang === lang && (
                                    <BsCheck size={23} className="color-primary" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcher;
