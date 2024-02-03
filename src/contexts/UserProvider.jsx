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

function getUserFromLoacalStorage(key, oldUsername) {
    const users = JSON.parse(localStorage?.getItem(key) || '[]');
    return users.find(user => user.userName === oldUsername);
}

function updateLocalStorage() {}

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
            const { userName: oldUsername } = action.payload;
            const oldUserLogin = getUserFromLoacalStorage('users', oldUsername);
            console.log(oldUserLogin);

            return {
                ...oldUserLogin,
            };

        case 'account/deposit':
            // payload = amount
            const oldUserDeposit = getUserFromLoacalStorage(
                'users',
                state.userName
            );
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [
                    ...state.transactions,
                    {
                        amount: action.payload,
                        action: 'Deposit',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                ],
            };

        case 'account/withdraw':
            return {
                ...state,
                // checking if the current amount that the user want to withdraw is grater than the current balance
                balance:
                    action.payload > state.balance
                        ? state.balance
                        : state.balance - action.payload,
                transactions: [
                    ...state.transactions,
                    {
                        amount: action.payload,
                        action: 'Withdraw',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                ],
            };

        case 'account/requestLoan':
            // checking if the user has requested loan
            if (state.loan > 0) return { ...state };
            return {
                ...state,
                loan: action.payload,
                balance: state.balance + action.payload,
                transactions: [
                    ...state.transactions,
                    {
                        amount: action.payload,
                        action: 'Request loan',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                ],
            };

        case 'account/payLoan':
            if (state.loan === 0) return { ...state };
            return {
                ...state,
                loan: 0,
                balance: state.balance - state.loan,
                transactions: [
                    ...state.transactions,
                    {
                        amount: state.loan,
                        action: 'Pay loan',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                ],
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
