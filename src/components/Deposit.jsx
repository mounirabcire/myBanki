import { useState } from 'react';
import { useUser } from '../contexts/UserProvider';
import Message from './Message';

function Deposit() {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const { dispatch } = useUser();

    function handleDeposit() {
        if (!amount) {
            setError('Please enter an amount');
            return;
        }
        if (amount < 0) {
            setError('Please enter a positive amount');
            setAmount('');
            return;
        }
        dispatch({ type: 'account/deposit', payload: amount });
        setAmount('');
    }

    return (
        <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
            <h2 className="text-h3 ">Deposit</h2>
            <div className="space-y-10">
                <input
                    type="number"
                    value={amount}
                    onChange={e => {
                        setAmount(Number(e.target.value));
                        setError('');
                    }}
                    className="p-5 w-full bg-transparent border border-blue-50 focus:outline-none"
                />
                {error !== '' && <Message type="error">{error}</Message>}

                <input
                    type="button"
                    value="Deposit"
                    onClick={handleDeposit}
                    className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                />
            </div>
        </div>
    );
}

export default Deposit;
