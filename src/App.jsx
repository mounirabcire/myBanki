import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import { UserProvider } from './contexts/UserProvider';

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
