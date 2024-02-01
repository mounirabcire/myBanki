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
            // payload = the new user info = {}
            const {
                userName: newUsername,
                email: newEmail,
                password: newPassword,
            } = action.payload;

            return {
                ...state,
                userName: newUsername,
                email: newEmail,
                password: newPassword,
            };

        case 'user/login':
            // payload = the old user info = {}
            const {
                userName: oldUsername,
                email: oldEmail,
                password: oldPassword,
            } = action.payload;

            return {
                ...state,
                userName: oldUsername,
                email: oldEmail,
                password: oldPassword,
            };

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
