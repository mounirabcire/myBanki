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

        case 'account/deposit':
            // payload = amount
            return { ...state, balance: state.balance + action.payload };

        case 'account/withdraw':
            return {
                ...state,
                // checking if the current amount that the user want to withdraw is grater than the current balance
                balance:
                    action.payload > state.balance
                        ? state.balance
                        : state.balance - action.payload,
            };

        case 'account/requestLoan':
            // checking if the user has requested loan
            if (state.loan > 0) return { ...state };
            return {
                ...state,
                loan: action.payload,
                balance: state.balance + action.payload,
            };

        case 'account/payLoan':
            if (state.loan === 0) return { ...state };
            return {
                ...state,
                loan: 0,
                balance: state.balance - state.loan,
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
