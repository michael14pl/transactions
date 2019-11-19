export const deleteTransfer = (id) => {
    return {
        type: 'DELETE_TRANSFER',
        id
    }
}

export const addTransfer = (name, amount) => {
    let id = Math.random();
    let date = Date.now();

    return {
        type: 'ADD_TRANSFER',
        name,
        amount: parseFloat(amount).toFixed(2),
        id,
        date
    }
}

export const euroCost = (pln) => {
    return {
        type: 'EUR_COST',
        pln: parseFloat(pln).toFixed(2)
    }
}