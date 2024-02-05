import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { numberFormat } from '../utils/numberFormat';

function Dashboard() {
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

    return (
        <section className=" px-10 py-30 min-h-screen text flex items-start justify-center gap-30 relative">
            <div className="space-y-15 max-w-[330px]">
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10 relative">
                    <h4 className="text-h4">{userName.toUpperCase()}</h4>
                    <p>
                        <b>${numberFormat(balance)}</b>
                    </p>
                    {loan > 0 && (
                        <p className="loan text-small">
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
                        className={`h-full px-10 py-15 rounded-l-normal absolute top-[-5px] right-[0px] bg text-white z-10 ${
                            !doAction && 'hidden'
                        } `}
                    >
                        <ul className=" space-y-5 flex flex-col justify-center items-start ">
                            <li className="underline capitalize cursor-pointer">
                                <Link
                                    to={'deposit'}
                                    onClick={handleCloseAction}
                                >
                                    deposit <span>&rarr;</span>
                                </Link>
                            </li>
                            <li className="underline capitalize cursor-pointer">
                                <Link
                                    to={'withdraw'}
                                    onClick={handleCloseAction}
                                >
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
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
                    <h2 className="text-h3 ">Our News</h2>
                    <div className="h-[300px] overflow-y-scroll">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis, earum. Nisi reiciendis doloribus
                            itaque nihil id officiis dolores nostrum et
                            voluptate hic pariatur aperiam illo iure, voluptas
                            minus tenetur ipsam. Voluptas animi veritatis
                            aliquam dolorum harum blanditiis eos officia
                            asperiores labore nobis officiis repellendus, a
                            quibusdam commodi doloribus accusantium porro neque
                            similique unde. Quo iusto voluptatum autem quis
                            exercitationem dolore. Voluptatibus fuga velit
                            expedita, impedit nesciunt, corrupti temporibus
                            ratione voluptatum debitis quo dolor suscipit cumque
                            atque corporis explicabo neque cum a reiciendis
                            mollitia in vel dolorum nemo non. Laboriosam,
                            libero? Repellendus, eligendi esse! Quas,
                            consequuntur obcaecati! Minima mollitia laboriosam
                            dignissimos consequuntur, aliquam libero veritatis
                            distinctio asperiores explicabo laudantium molestias
                            temporibus porro numquam eveniet architecto quos
                            nobis reiciendis quas itaque aliquid! Voluptatibus
                            optio error omnis cupiditate architecto labore
                            aspernatur libero, sit ducimus iste sequi officia
                            accusamus inventore quia tempora repudiandae
                            molestiae commodi dolores beatae obcaecati ad
                            perspiciatis veritatis odit deleniti. Hic.
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-15 max-w-[330px] ">
                <Outlet />
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
                    <h2 className="text-h3 ">Savings</h2>
                    <div>
                        <p className="text-small">Your saving card is empty</p>
                    </div>
                </div>
            </div>
            <div className="space-y-15 max-w-[330px] ">
                <div className="h-full p-15 space-y-5 border-[1px] border-solid border-blue-10">
                    <h2 className="text-h3 ">My Transactions</h2>
                    <div className="space-y-5">
                        {transactions.length === 0 ? (
                            <p className="text-small">No Transactions</p>
                        ) : (
                            transactions.map(trans => (
                                <Transaction
                                    key={crypto.randomUUID()}
                                    trans={trans}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className="px-15 py-30 w-full bg text-white flex justify-between fixed bottom-[0px] left-[0px] text-small font-semibold ">
                <div className="flex items-center gap-60">
                    <p>In: ${posAmount}</p>
                    <p>Out: ${negAmount}</p>
                    <p>Sort</p>
                </div>
                <div>
                    <p className="space-x-5">
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

export default Dashboard;
