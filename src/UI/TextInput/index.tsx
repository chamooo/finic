import { useEffect, useRef } from 'react';
import s from './styles.module.scss';
import { useModal } from '../../components/ModalContext';

type TextInputType = {
    id: string;
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
};

const TextInput: React.FC<TextInputType> = ({ id, name, type = 'text', label, placeholder }) => {
    const { isActive } = useModal();
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
        inputRef.current!.value = '';
    }, [isActive]);

    return (
        <label htmlFor={id} className={s.label}>
            {label}
            <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                className={`${s.input}`}
            />
        </label>
    );
};

export default TextInput;
