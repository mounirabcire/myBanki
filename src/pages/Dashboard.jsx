import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useState } from 'react';

function Dashboard() {
    const [doAction, setDoAction] = useState(false);
    const [action, setAction] = useState('');
    const user = useUser();
    const { userName, balance, transactions, loan } = user;

    function handleCloseAction() {
        setDoAction(false);
    }
    // console.log(user);

    return (
        <section className=" px-10 py-30 min-h-screen text flex items-start justify-center gap-30">
            <div className="space-y-15 max-w-[330px]">
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10 relative">
                    <h4 className="text-h4">{userName}</h4>
                    <p>
                        <b>${balance}</b>
                    </p>
                    <p className="text-small">
                        {transactions.length === 0
                            ? 'No transactions have been made yet!'
                            : 'Last time you deposite: $100'}
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
                <div>01/01/2024</div>
                <div className="h-full p-15 space-y-5 border-[1px] border-solid border-blue-10">
                    <h2 className="text-h3 ">My Transactions</h2>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
