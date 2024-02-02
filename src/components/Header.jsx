import { useState } from 'react';
import Logo from '../components/Logo';
import PagesLinks from '../components/PagesLinks';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';

function Header() {
    // Hooks
    const [isVisible, SetIsVisible] = useState(false);

    // Functions
    function handleMenuBar() {
        SetIsVisible(pre => !pre);
    }
    return (
        <header className="min-h-screen bg-hero-section bg-[center_right_-300px] sm:bg-center bg-no-repeat bg-cover overflow-hidden relative">
            {isVisible && <MenuBar onClick={handleMenuBar} />}
            <div className="h-full px-10 pt-30 sm:px-30 lg:px-[80px] bg-[#00000080]">
                <nav className="flex justify-between items-center">
                    <Logo />
                    <PagesLinks />
                    <div
                        className="space-y-5 cursor-pointer lg:hidden"
                        onClick={handleMenuBar}
                    >
                        <div className="w-[25px] h-[2px] bg-white rounded-normal"></div>
                        <div className="w-[25px] h-[2px] bg-white rounded-normal"></div>
                        <div className="w-[25px] h-[2px] bg-white rounded-normal"></div>
                    </div>
                    <div className="hidden lg:block">
                        <button className="bg-blue-10 px-[24px] py-15 rounded-normal font-bold text-white">
                            <Link to="login">Get Started</Link>
                        </button>
                    </div>
                </nav>
                <section className="herro-section flex flex-col justify-center items-start ">
                    <div className="mb-60 space-y-60">
                        <div className="space-y-30">
                            <h1 className=" max-w-[850px] text-h2 sm:text-h1 text-white leading-[85px]">
                                Make your life esier by{' '}
                                <span className="text-blue-50">
                                    online banking
                                </span>
                                .
                            </h1>
                            <h4 className="font-semibold text-white">
                                Manage finance by security and joy.
                            </h4>
                        </div>
                        <div className="space-x-30">
                            <button className="bg-blue-10 px-[24px] py-15 rounded-normal font-bold text-white">
                                <Link to="dashboard">Get Started</Link>
                            </button>
                            <button className="border bg-transparent px-[24px] py-15 text-white rounded-normal font-bold ">
                                <a href="#features">See Features</a>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;
