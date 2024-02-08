import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useUser } from '../contexts/UserProvider';
import { numberFormat } from '../utils/numberFormat';

import Transaction from '../components/Transaction';
import 'remixicon/fonts/remixicon.css';

function DashboardMobile() {
    const [isOpened, setIsOpened] = useState(false);
    const [doAction, setDoAction] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const user = useUser();
    const { userName, balance, transactions, loan } = user;
    const posAmount = transactions.reduce(
        (acc, tran) =>
            tran.action === 'Deposit' || tran.action === 'Request loan'
                ? acc + tran.amount
                : acc,
        0
    );
    const negAmount = transactions.reduce(
        (acc, tran) =>
            tran.action === 'Withdraw' || tran.action === 'Pay loan'
                ? acc + tran.amount
                : acc,
        0
    );
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const time = hours < 12 ? 'AM' : 'PM';

    function handleCloseAction() {
        setDoAction(false);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // console.log('rendering')
    return (
        <section className="px-10 py-30 min-h-screen text md:hidden relative overflow-x-hidden space-y-15">
            <div
                className={`w-full h-[100vh] space-y-30 fixed top-[0px] ${
                    isOpened ? 'left-[0px]' : 'left-[-100vw]'
                } transition-all bg-white z-30`}
            >
                <div
                    onClick={() => setIsOpened(pre => !pre)}
                    className={`w-[30px] h-[35px] absolute top-[0px] ${
                        isOpened
                            ? 'right-[0px] bg rounded-l-[50%]'
                            : 'right-[-25px] bg rounded-r-[50%]'
                    } flex items-center justify-center z-40`}
                >
                    {isOpened ? (
                        <i className="ri-arrow-left-line text-white"></i>
                    ) : (
                        <i className="ri-arrow-right-line text-white"></i>
                    )}
                </div>
                <div className="transactions pb-60 h-full overflow-hidden">
                    <h2 className="p-15 lg:text-h3 text-h4">My Transactions</h2>
                    <div className="h-[80%] p-15 space-y-10 overflow-y-scroll bg text-white">
                        {transactions.length === 0 ? (
                            <p className="text-small">No Transactions</p>
                        ) : (
                            transactions.map(trans => (
                                <Transaction
                                    key={
                                        Math.random()
                                            .toString(36)
                                            .substring(2) +
                                        Date.now().toString(36)
                                    }
                                    trans={trans}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className="p-15 space-y-5 relative">
                <h4 className="text-h4">{userName.toUpperCase()}</h4>
                <p>
                    <b>${numberFormat(balance)}</b>
                </p>
                {loan > 0 && (
                    <p className="loan text-small text-red">
                        You have a loan of <b>${numberFormat(loan)}</b>
                    </p>
                )}
                <p className="text-small">
                    {transactions.length === 0
                        ? 'No transactions have been made yet!'
                        : `Last action: ${
                              transactions[transactions.length - 1].action
                          } $${numberFormat(
                              transactions[transactions.length - 1].amount
                          )}`}
                </p>
                <p>
                    <span
                        className="underline cursor-pointer"
                        onClick={() => setDoAction(pre => !pre)}
                    >
                        Do an action
                    </span>{' '}
                    <span>&rarr;</span>
                </p>
                <div
                    className={`h-full px-10 py-15 rounded-l-normal absolute top-[-5px] right-[0px] bg text-white z-30 ${
                        !doAction && 'hidden'
                    } `}
                >
                    <ul className=" space-y-5 flex flex-col justify-center items-start ">
                        <li className="underline capitalize cursor-pointer">
                            <Link to={'deposit'} onClick={handleCloseAction}>
                                deposit <span>&rarr;</span>
                            </Link>
                        </li>
                        <li className="underline capitalize cursor-pointer">
                            <Link to={'withdraw'} onClick={handleCloseAction}>
                                withdraw <span>&rarr;</span>
                            </Link>
                        </li>
                        <li className="underline capitalize cursor-pointer">
                            <Link
                                to={'loan/request'}
                                onClick={handleCloseAction}
                            >
                                request loan <span>&rarr;</span>
                            </Link>
                        </li>

                        {loan > 0 && (
                            <li className="underline capitalize cursor-pointer">
                                <Link
                                    to={'loan/pay'}
                                    onClick={handleCloseAction}
                                >
                                    pay loan back <span>&rarr;</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
            <div className="p-15 space-y-5">
                <h2 className="lg:text-h3 text-h4 ">Savings</h2>
                <div>
                    <p className="text-small">Your saving card is empty</p>
                </div>
            </div>

            <div className="p-15 space-y-5">
                <h2 className="lg:text-h3 text-h4 ">Our News</h2>
                <div className="news overflow-y-scroll">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, earum. Nisi reiciendis doloribus itaque nihil
                        id officiis dolores nostrum et voluptate hic pariatur
                        aperiam illo iure, voluptas minus tenetur ipsam.
                        Voluptas animi veritatis aliquam dolorum harum
                        blanditiis eos officia asperiores labore nobis officiis
                        repellendus, a quibusdam commodi doloribus accusantium
                        porro neque similique unde. Quo iusto voluptatum autem
                        quis exercitationem dolore. Voluptatibus fuga velit
                        expedita, impedit nesciunt, corrupti temporibus ratione
                        voluptatum debitis quo dolor suscipit cumque atque
                        corporis explicabo neque cum a reiciendis mollitia in
                        vel dolorum nemo non.
                    </p>
                </div>
            </div>
            <div className="px-5 py-30 w-full bg text-white flex justify-between fixed bottom-[0px] left-[0px] text-small font-semibold z-50">
                <div className="flex items-center gap-5">
                    <p>In: ${posAmount}</p>
                    <p>Out: ${negAmount}</p>
                    <p>Sort</p>
                </div>
                <div>
                    <p className="space-x-[2px]">
                        <span>{hours < 10 ? '0' + hours : hours}</span>
                        <span>:</span>
                        <span>{minutes < 10 ? '0' + minutes : minutes}</span>
                        <span>:</span>
                        <span>{seconds < 10 ? '0' + seconds : seconds}</span>
                        <span>{time}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DashboardMobile;
