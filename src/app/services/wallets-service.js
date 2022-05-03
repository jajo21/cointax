import { nanoid } from "nanoid";
import WalletTransactionService from "./api/wallet-transactions-service";

class WalletsService {
    getWallets() {
        if (localStorage.getItem('wallets') !== null || undefined) {
            let wallets = JSON.parse(localStorage.getItem('wallets'));
            return wallets;
        } else {
            return [];
        }
    }

    getWallet(id) {
        let wallets = this.getWallets();
        return wallets.find(
            wallet => wallet.id === id
        );
    }

    saveWallet(wallet) {
        let allWallets = this.getWallets();
        wallet.id = nanoid();
        if(wallet.walletSite === 'Mock-Kryptobörs') {
            wallet.apiURL = 'https://retoolapi.dev/H2CF6R/';
        }
        allWallets.push(wallet);
        localStorage.setItem('wallets', JSON.stringify(allWallets));
        console.log(allWallets);
    }

    getWalletTransactions(URL) {
        let WTS = new WalletTransactionService();
        return WTS.getTransactions(URL);
    }
}

export default WalletsService;