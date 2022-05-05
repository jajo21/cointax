import { nanoid } from "nanoid";
import WalletTransactionsApiCaller from "./api/wallet-transactions-api-caller";

class WalletsService {
    constructor() {
        this.transactionsCaller = new WalletTransactionsApiCaller();
    }

    getWallets() {
        if (localStorage.getItem('wallets') !== null || undefined) {
            let wallets = JSON.parse(localStorage.getItem('wallets'));
            return wallets;
        } else {
            return [];
        }
    }

    getWallet(walletSite) {
        let wallets = this.getWallets();
        return wallets.find(
            wallet => wallet.walletSite === walletSite
        );
    }

    saveWallet(wallet) {
        let allWallets = this.getWallets();
        wallet.id = nanoid();
        if(wallet.walletSite === 'MockKryptobörs') {
            wallet.apiURL = this.transactionsCaller.getMockCryptoBrokerURL();
        }
        allWallets.push(wallet);
        localStorage.setItem('wallets', JSON.stringify(allWallets));
        console.log(allWallets);
    }

    deleteWallet(id) {
        let wallets = this.getWallets();
        wallets = wallets.filter(
            wallet => wallet.id !== id
        );
        localStorage.setItem('wallets', JSON.stringify(wallets));
        console.log(wallets);
    }

    getWalletTransactions = async(URL) => {
        return this.transactionsCaller.getTransactions(URL);
    }
}

export default WalletsService;