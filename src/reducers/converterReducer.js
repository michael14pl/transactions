export const converterReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_PLN_VALUE':
            return action.pln;
        default:
            return state;
    }
}