export const sortTransactionsForTaxes = (transactions) => {
    transactions.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })
}

export const sortTransactionsForView = (transactions) => {
    transactions.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })
}

