import { NavLink } from 'react-router-dom';

const parentVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.25,
            when: 'beforeChildren',
        },
    },
};

const childrenVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 },
};

function Actions({ loan, handleCloseAction }) {
    return (
        <div
            className={`h-full px-10 py-15 rounded-l-normal absolute top-[-5px] right-[0px] bg text-white z-10 `}
        >
            <ul className=" space-y-5 flex flex-col justify-center items-start ">
                <li className="underline capitalize cursor-pointer">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-blue-10' : 'text-white'
                        }
                        to={'deposit'}
                        onClick={handleCloseAction}
                    >
                        deposit <span>&rarr;</span>
                    </NavLink>
                </li>
                <li className="underline capitalize cursor-pointer">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-blue-10' : 'text-white'
                        }
                        to={'withdraw'}
                        onClick={handleCloseAction}
                    >
                        withdraw <span>&rarr;</span>
                    </NavLink>
                </li>
                <li className="underline capitalize cursor-pointer">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-blue-10' : 'text-white'
                        }
                        to={'loan/request'}
                        onClick={handleCloseAction}
                    >
                        request loan <span>&rarr;</span>
                    </NavLink>
                </li>

                {loan > 0 && (
                    <li className="underline capitalize cursor-pointer">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-blue-10' : 'text-white'
                            }
                            to={'loan/pay'}
                            onClick={handleCloseAction}
                        >
                            pay loan back <span>&rarr;</span>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Actions;
