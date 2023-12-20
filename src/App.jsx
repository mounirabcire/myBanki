import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import PageNotFound from './pages/pagenotfound/PageNotFound';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="features" element={<Features />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="contact" element={<Contact />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
