import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

import bg1 from '../../public/login.png';
import Message from './Message';

function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // based on hasAccount state we will dispaly an error or success message
    const [hasAccount, setHasAccount] = useState(null);
    const navigate = useNavigate();
    const { dispatch } = useUser();

    // setting the states back to their original state ,
    function handleStates() {
        setEmail('');
        setUserName('');
        setPassword('');
    }

    function handleSingup(e) {
        e.preventDefault();

        if (!userName || !email || !password) return;

        const newUser = {
            userName,
            email,
            password,
        };
        // If there are no users in the local storage so an empty array is returned,
        const users = JSON.parse(localStorage?.getItem('users')) ?? [];

        if (users.length > 0) {
            // If the users local storage exists so check if the user already has an account(checking the username or the email)
            const isExisted = users.some(
                item =>
                    item.userName === newUser.userName ||
                    item.email === newUser.email
            );

            // If the user doesn't exist, add user info to the local storage, else return the previous users
            if (!isExisted) {
                localStorage.setItem(
                    'users',
                    JSON.stringify([...users, newUser])
                );
                // updating the state
                dispatch({ type: 'user/singup', payload: newUser });
            } else {
                localStorage.setItem('users', JSON.stringify([...users]));
            }

            setHasAccount(isExisted);
            handleStates();
            return;
        } else {
            // If there are no users in the local storage so a new local storage is created 'users',
            localStorage.setItem('users', JSON.stringify([newUser]));
            setHasAccount(false);
            dispatch({ type: 'user/singup', payload: newUser });
            handleStates();
            return;
        }
    }

    return (
        <div className="h-screen bg flex flex-col sm:flex-row relative">
            {hasAccount === false && (
                <Message type="singup" dispatch={dispatch}>
                    You've signed up successfully!
                </Message>
            )}
            <div className="h-1/2 bg-white flex justify-center items-center sm:w-1/2 sm:h-full">
                <div className="flex w-[600px] justify-center items-center">
                    <img src={bg1} alt="Log in" className="w-auto h-[400px]" />
                </div>
            </div>
            <div className="h-1/2 p-30 text-white flex flex-col justify-center items-center sm:w-1/2 sm:h-full">
                <h2 className="mb-30 text-center text-h2 font-bold">Sign up</h2>
                <form className="mb-30 space-y-15 min-w-[300px] max-w-[320px] ">
                    <div>
                        <input
                            value={userName}
                            onChange={e => {
                                setUserName(e.target.value);
                                setHasAccount(null);
                            }}
                            placeholder="Username..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        {hasAccount && (
                            <p className="mt-5 text-red text-small">
                                You already have an account!{' '}
                                <span
                                    className="text-blue-50 underline font-medium cursor-pointer"
                                    onClick={() => navigate('/login')}
                                >
                                    Log in
                                </span>
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value);
                                setHasAccount(null);
                            }}
                            placeholder="Email..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value);
                                setHasAccount(null);
                            }}
                            placeholder="Password..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Sign up"
                            onClick={handleSingup}
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </form>
                <p className="w-full text-center ">
                    Already have an account?{' '}
                    <span
                        className="text-blue-50 underline font-medium cursor-pointer"
                        onClick={() => navigate('/login')}
                    >
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Signup;
