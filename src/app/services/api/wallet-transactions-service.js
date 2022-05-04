class WalletTransactionService {

    getTransactions = async (baseURL) => {
        const URL = `${baseURL}transactions`;
        const response = await fetch(URL);
        const data = await response.json();
        return data;

    }
}

export default WalletTransactionService;