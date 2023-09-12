import { BiSearch } from 'react-icons/bi';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useModal } from './ModalContext';

const Header = () => {
    const { toggleActive } = useModal();

    return (
        <div className="header flex items-center justify-between">
            <div className="header-slogan flex flex-col">
                <span className="text-2xl font-bold mb-1">Hello,</span>
                <span className="font-regular">Mr. Jon Snow</span>
            </div>
            <div className="header-actions flex items-center gap-10">
                <div className="flex items-center gap-6">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                    <BiSearch size={21} className="cursor-pointer" onClick={toggleActive} />
                </div>
                <div className="header-profile profile-btn">
                    <img
                        src="https://www.thesun.co.uk/wp-content/uploads/2017/05/jon-snow-and-the-nights-watch-e1494021230137.jpg"
                        alt="Profile image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
