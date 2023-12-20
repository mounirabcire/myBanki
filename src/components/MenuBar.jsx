import { NavLink } from 'react-router-dom';

function MenuBar({ onClick }) {


    return (
        <div className="h-screen w-screen bg fixed z-30">
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
                    <NavLink className="text-h4 text-white" to="/" onClick={onClick}>
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h4 text-white" to="features" onClick={onClick}>
                        Featues
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h4 text-white" to="pricing" onClick={onClick}>
                        Pricing
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text-h4 text-white" to="contact" onClick={onClick}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
