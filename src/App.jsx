import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { UserProvider } from './contexts/UserProvider';
import { AuthenticationProvider } from './contexts/AuthenticationProvider';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import RequestLoan from './components/RequestLoan';
import PayLoan from './components/PayLoan';

function App() {
    // FIXME: create an error message component (login, signup) => reusable code
    // FIXME: if the user  provided the same username => the username has already been tooken (Singup )
    // TODO: if the user do an action a message will be displayed at the bottom of the page (Dashboard)
    // TODO: Format currency module
    // TODO: display an error message if the user want to withdraw an amount greater than his balance (Withdraw => below input)
    // FIXME: The inputs don't accept negatvie numbers!
    // FIXME: we don't need isRequestedLoan varibale, based on the loan variable if > 0 or not
    // FIXME: we don't need an input, just a button  (PayLoan)

    return (
        <UserProvider>
            <AuthenticationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route
                            path="dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<Navigate replace to="deposit" />}
                            />
                            <Route path="deposit" element={<Deposit />} />
                            <Route path="withdraw" element={<Withdraw />} />
                            <Route
                                path="loan/request"
                                element={<RequestLoan />}
                            />
                            <Route path="loan/pay" element={<PayLoan />} />
                        </Route>

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthenticationProvider>
        </UserProvider>
    );
}

export default App;
