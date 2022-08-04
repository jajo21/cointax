class WalletTransactionApiCaller {
    constructor() {
        this.mockCryptoBrokerURL = 'https://localhost:7284/api/'
    }

    getMockCryptoBrokerURL = () => {
        return this.mockCryptoBrokerURL;
    }

    getTransactions = async (baseURL) => {
        const URL = `${baseURL}Transaction`;
        try {
            const response = await fetch(URL);
            if(!response.ok) {
                throw new Error(response.status)
            }
            const transactions = await response.json();
            return [transactions, null];
        } catch (err) {
            const error = {status: err.message, message: 'Något gick fel vid hämtning av transaktioner!'}
            return [null, error]
        }
    }
}

export default WalletTransactionApiCaller;