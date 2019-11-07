const initState = {
    pln: '4.00',
    transactions: [
        { name: "Rachunek za telefon", amount: "2.43", id: 1, date: 1 },
        { name: "Wyjście do kina", amount: "4.02", id: 2, date: 2 },
        { name: "Bilet komunikacji miejskiej", amount: "0.21", id: 3, date: 3 }
    ],
    transactionsSorted: [
        { name: "Rachunek za telefon", amount: "2.43", id: 1, date: 1 },
        { name: "Wyjście do kina", amount: "4.02", id: 2, date: 2 },
        { name: "Bilet komunikacji miejskiej", amount: "0.21", id: 3, date: 3 }
    ],
}

const transactionsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_TRANSFER': {
            let transactions = state.transactions.filter(t => t.id !== action.id)
            let transactionsSorted = state.transactionsSorted.filter(t => t.id !== action.id)
            return {
                ...state,
                transactions,
                transactionsSorted,
            }
        }
        case 'ADD_TRANSFER': {
            let transaction = { name: action.name, amount: action.amount, id: action.id, date: action.date }
            let transactionSorted = { name: action.name, amount: action.amount, id: action.id, date: action.date }
            console.log(state.transactions)
            return {
                ...state,
                transactions: [...state.transactions, transaction],
                transactionsSorted: [...state.transactionsSorted, transactionSorted],

            }
        }
        case 'EUR_COST': {
            return {
                ...state,
                pln: action.pln
            }
        }
        default:
            return state

    }
}

export default transactionsReducer;