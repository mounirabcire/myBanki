import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
// import PageNotFound from './pages/pagenotfound/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
