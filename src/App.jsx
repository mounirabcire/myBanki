import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

const initialeState = {
    userName: '',
    balance: 0,
    loan: 0,
    isRequestedLoan: false,
    transactions: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'user/login':
            return { ...state, userName: action.payload };
        default:
            return { ...state };
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialeState);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login dispatch={dispatch} />} />
                <Route path="signup" element={<Signup />} />
                <Route
                    path="dashboard"
                    element={<Dashboard state={state} dispatch={dispatch} />}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
