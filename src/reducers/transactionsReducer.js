export const transactionsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [...state, {
                name: action.name,
                amount: action.amount,
                id: require('shortid').generate(),
                date: Date.now()
            }]
        case 'DELETE_TRANSACTION':
            return state.filter(transaction => transaction.id !== action.id)
        default:
            return state
    }
}