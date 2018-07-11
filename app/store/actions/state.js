import { STORE_USER , GET_USERDOC, GET_TRANSACTIONS} from './actionTypes'

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

export const getTransactions = (uid, startDate, endDate) => {
    return {
        type: GET_TRANSACTIONS,
        uid: uid,
        startDate: startDate,
        endDate: endDate
    };
}; 