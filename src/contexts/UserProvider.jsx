import { createContext, useContext, useReducer } from 'react';

const UserConext = createContext();

const initialeState = {
    userName: '',
    email: '',
    password: '',
    balance: 0,
    loan: 0,
    isRequestedLoan: false,
    transactions: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'user/singup':
            const { userName, email, password } = action.payload;
            // payload = the user info = {}
            return { ...state, userName, email, password };
        default:
            return { ...state };
    }
}
function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialeState);

    return (
        <UserConext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserConext.Provider>
    );
}

function useUser() {
    const context = useContext(UserConext);

    if (!context) throw new Error('The contexte was used outside the profider');
    return context;
}

export { useUser, UserProvider };
