import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

function PayLoan() {
    const { dispatch, loan } = useUser();
    const navigate = useNavigate();

    function handlePayLoan() {
        dispatch({ type: 'account/payLoan' });
        navigate('/dashboard');
    }

    return (
        <div className="p-15 space-y-5 border-[1px] border-solid border-blue-10">
            <h2 className="text-h3 ">Pay Loan</h2>
            <div className="space-y-10">
                <input
                    type="button"
                    value={`Pay Loan ${loan > 0 ? `$${loan}` : ''}`}
                    onClick={handlePayLoan}
                    className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                />
            </div>
        </div>
    );
}

export default PayLoan;