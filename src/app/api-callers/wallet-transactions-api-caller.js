class WalletTransactionApiCaller {
    constructor() {
        this.mockCryptoBrokerURL = 'https://retoolapi.dev/Dr8AOw/'
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
            const data = await response.json();
            return data;
        } catch (error) {
            return error.message
        }

    }
}

export default WalletTransactionApiCaller;