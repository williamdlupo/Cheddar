import { STORE_USER , GET_USERDOC, GET_TRANSACTIONS, STORE_SDATE, STORE_EDATE, STORE_ACCOUNT} from './actionTypes'

export const storeUser = (user) => {
    return {
        type: STORE_USER,
        user: user
    };
}; 

export const getUserDoc = (doc) => {
    return {
        type: GET_USERDOC,
        doc: doc
    };
}; 

export const getTransactions = (transactions) => {
    return {
        type: GET_TRANSACTIONS,
        transactions: transactions
    };
}; 

export const storeStartDate = start_date => {
    return {
        type: STORE_SDATE,
        start_date: start_date
    }
};

export const storeEndDate = end_date => {
    return {
        type: STORE_EDATE,
        end_date: end_date
    }
};

export const storeAccount = account_id => {
    return {
        type: STORE_ACCOUNT,
        account_id: account_id
    }
};