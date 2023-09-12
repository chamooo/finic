import React, { useState, useRef, useEffect } from 'react';
import s from './styles.module.scss';

type Props = {
    children: JSX.Element | JSX.Element[];
    trigger: JSX.Element;
};

const Dropdown: React.FC<Props> = ({ children, trigger }) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!dropdownRef.current?.contains(e.target as Node)) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`cursor-pointer ${s.dropdown}`}>
            <div ref={dropdownRef} onClick={() => setIsActive((prev) => !prev)}>
                {trigger}
            </div>
            <div className={`${s.dropdownList} ${isActive ? s.active : ''}`}>{children}</div>
        </div>
    );
};

export default Dropdown;
