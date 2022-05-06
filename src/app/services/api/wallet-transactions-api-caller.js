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
                throw new Error(response.statusText)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }

    }
}

export default WalletTransactionApiCaller;