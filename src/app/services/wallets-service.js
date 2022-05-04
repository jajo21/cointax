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
            wallet.apiURL = 'https://retoolapi.dev/Dr8AOw/';
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