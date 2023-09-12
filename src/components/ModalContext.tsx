import React, { useState, useContext, createContext, ReactNode } from 'react';

interface ModalContextType {
    isActive: boolean;
    toggleActive: () => void;
}

type Props = {
    children: ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<Props> = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => setIsActive((prev) => !prev);

    return (
        <ModalContext.Provider value={{ isActive, toggleActive }}>{children}</ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export default ModalContext;
