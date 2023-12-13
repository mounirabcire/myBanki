import { useState } from 'react';
import bg1 from '../../../public/login.png';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col sm:flex-row">
            <div className="h-1/2 p-30 flex flex-col justify-center items-center sm:w-1/2 sm:h-full">
                <h2 className="mb-30 text-center text-h2 font-bold">Log in</h2>
                <form className="mb-30 space-y-15 w-[300px] ">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Log in"
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </form>
                <p className="w-full text-center ">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-50 underline font-medium cursor-pointer"
                        onClick={() => navigate('/signup')}
                    >
                        Sign up
                    </span>
                </p>
            </div>
            <div className="h-1/2 bg flex justify-center items-center sm:w-1/2 sm:h-full">
                <div className="flex w-[600px] justify-center items-center">
                    <img src={bg1} alt="Log in" className="w-auto h-[400px]" />
                </div>
            </div>
        </div>
    );
}

export default Login;
