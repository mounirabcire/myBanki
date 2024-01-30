import { NavLink } from 'react-router-dom';
import PagesLinks from './PagesLinks';

function MenuBar({ onClick }) {
    return (
        <div className="h-screen w-screen bg fixed z-30">
            <div className=" h-90 flex flex-col justify-center items-center relative">
                <div
                    className="w-[50px] h-[5px] bg-white absolute rotate-[-47deg] cursor-pointer"
                    onClick={onClick}
                ></div>
                <div
                    className="w-[50px] h-[5px] bg-white absolute rotate-[47deg] cursor-pointer"
                    onClick={onClick}
                ></div>
            </div>
            <div className="menu-bar-links  flex flex-col justify-center items-center">
                <ul className="space-y-90">
                    <li className=" text-center">
                        <a href="#features" className="text-h4 text-white">
                            Home
                        </a>
                    </li>
                    <li className=" text-center">
                        <a href="#features" className="text-h4 text-white">
                            Features
                        </a>
                    </li>
                    <li className=" text-center">
                        <a href="#pricing" className="text-h4 text-white">
                            Pricing
                        </a>
                    </li>
                    <li className=" text-center">
                        <a href="#contact" className="text-h4 text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
