import WalletsService from "./wallets-service";

class TaxService {
    constructor() {
        this.walletsService = new WalletsService();
    }

    getTransactions = async() => {
        let wallets = await this.walletsService.getWallets();
        let wallet = wallets.find(wallet => wallet.walletSite === "MockKryptobörs");
        let transactions = await this.walletsService.getWalletTransactions(wallet.apiURL);
        return transactions;
    }

    makeTaxes = (transactions) => {
        let newTransactions = transactions.concat();
        let totalCoins = 0;
        let totalCostAmount = 0;
        let averageCostAmount = 0;
        let winOrLossOnSell = 0;
        newTransactions.map(transaction => {
            if(transaction.cNameBought === 'BTC') {
                totalCoins = totalCoins + parseInt(transaction.sumBought);
                totalCostAmount = totalCostAmount + parseInt(transaction.sumSold);
                transaction.usedCostAmount = parseInt(transaction.sumSold);
            }
            if(transaction.cNameSold === 'BTC') {
                transaction.usedCostAmount = (totalCostAmount/totalCoins) * parseInt(transaction.sumSold);
                let totalCostPerCoin = totalCostAmount / totalCoins;
                totalCoins = totalCoins - parseInt(transaction.sumSold);
                totalCostAmount = totalCostPerCoin * totalCoins;
                winOrLossOnSell = parseInt(transaction.sumBought) - (parseInt(transaction.sumSold) * averageCostAmount)
                transaction.winOrLossOnSell = winOrLossOnSell;
            }
            transaction.totalCoins = totalCoins;
            transaction.totalCostAmount = totalCostAmount;
            transaction.averageCostAmount = averageCostAmount = totalCostAmount/totalCoins;
        });

        return newTransactions;
    }
}

export default TaxService;