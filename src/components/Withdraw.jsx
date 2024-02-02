import { useState } from 'react';
import { useUser } from '../contexts/UserProvider';

function Withdraw() {
    const [amount, setAmount] = useState('');
    const { dispatch } = useUser();

    function handleWithdraw() {
        dispatch({ type: 'account/withdraw', payload: amount });
        setAmount('');
    }

    return (
        <div>
            <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
                <h2 className="text-h3 ">Withdraw</h2>
                <div className="space-y-10">
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        className="p-5 w-full bg-transparent border border-blue-50 focus:outline-none"
                    />

                    <input
                        type="button"
                        value="Withdraw"
                        onClick={handleWithdraw}
                        className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                    />
                </div>
            </div>
        </div>
    );
}

export default Withdraw;
