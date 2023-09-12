import React, { useEffect } from 'react';
import { useModal } from '../../components/ModalContext';
import s from './styles.module.scss';
import { IoClose } from 'react-icons/io5';

type Props = {
    children: JSX.Element | JSX.Element[] | string;
};

const Solid: React.FC<Props> = ({ children }) => {
    const { isActive, toggleActive } = useModal();

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
                event.preventDefault();
                toggleActive();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <div className={`${isActive ? s.active : ''} ${s.solid}`}>
            <IoClose size={35} className={s.closeBtn} onClick={toggleActive} />
            {children}
        </div>
    );
};

export default Solid;
