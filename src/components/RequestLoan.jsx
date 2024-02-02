import { useState } from 'react';
import { useUser } from '../contexts/UserProvider';

function RequestLoan() {
    const [amount, setAmount] = useState('');
    const { dispatch } = useUser();

    function handleRequestLoan() {
        dispatch({ type: 'account/requestLoan', payload: amount });
        setAmount('');
    }

    return (
        <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
            <h2 className="text-h3 ">Request Loan</h2>
            <div className="space-y-10">
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    className="p-5 w-full bg-transparent border border-blue-50 focus:outline-none"
                />

                <input
                    type="button"
                    value="Request Loan"
                    onClick={handleRequestLoan}
                    className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                />
            </div>
        </div>
    );
}

export default RequestLoan;
