class WalletTransactionApiCaller {
    constructor() {
        this.mockCryptoBrokerURL = 'https://retoolapi.dev/uN33aW/'
    }

    getMockCryptoBrokerURL = () => {
        return this.mockCryptoBrokerURL;
    }

    getTransactions = async (baseURL) => {
        const URL = `${baseURL}transactions`;
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