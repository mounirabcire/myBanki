import { useState } from 'react';

function Dashboard({ state, dispatch }) {
    const [action, setAction] = useState('');
    const { userName, balance, transactions } = state;

    return (
        <section className=" px-10 py-30 min-h-screen text flex items-start justify-center gap-30">
            <div className="space-y-15 max-w-[330px] ">
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
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
                        <span className="underline cursor-pointer">
                            Do an action
                        </span>{' '}
                        <span>&rarr;</span>
                    </p>
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
                <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
                    <h2 className="text-h3 ">Deposit</h2>
                    <div className="space-y-10">
                        <input
                            type="number"
                            className="p-5 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />

                        <input
                            type="button"
                            value="Deposit"
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </div>
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
