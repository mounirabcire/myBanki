import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserProvider } from './contexts/UserProvider';
import { AuthenticationProvider } from './contexts/AuthenticationProvider';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
    // FIXME: create an error message component (login, signup) => reusable code
    // FIXME: if the user provided the samee email so he already has an account,
    //        and if he provided the same username so the username has already been tooken (Singup )

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
                        />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthenticationProvider>
        </UserProvider>
    );
}

export default App;
