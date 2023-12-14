import { NavLink } from 'react-router-dom';

function MenuBar({ onClick }) {
    return (
        <div className="h-screen w-screen bg absolute">
            <div className=" h-90 flex flex-col justify-center items-center relative">
                <div
                    className="w-[50px] h-[5px] bg-white absolute rotate-[-47deg]"
                    onClick={onClick}
                ></div>
                <div
                    className="w-[50px] h-[5px] bg-white absolute rotate-[47deg]"
                    onClick={onClick}
                ></div>
            </div>
            <div className="menu-bar-links space-y-90 flex flex-col justify-center items-center">
                <div>
                    <NavLink className="text-h3 text-white" to="/">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h3 text-white" to="features">
                        Featues
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h3 text-white" to="pricing">
                        Pricing
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h3 text-white" to="contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
