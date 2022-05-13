import { nanoid } from "nanoid";
import Localbase from 'localbase';
import WalletTransactionsApiCaller from "../api-callers/wallet-transactions-api-caller";

class WalletsService {
    constructor() {
        this.transactionsCaller = new WalletTransactionsApiCaller();
        this.db = new Localbase('CointaxDB');
        this.db.config.debug = false;
    }

    getWallets = async () => {
        return await this.db.collection('wallets').get().then(wallets => {
            return wallets;
        });
    }

    getWallet = async(walletSite) => {
        let wallets = await this.getWallets();
        return wallets.find(
            wallet => wallet.walletSite === walletSite
        );
    }

    saveWallet = async (wallet) => {
        wallet.id = nanoid();
        if(wallet.walletSite === 'MockKryptobörs') {
            wallet.apiURL = this.transactionsCaller.getMockCryptoBrokerURL();
        }
        await this.db.collection('wallets').add(wallet);
        return await this.getWallets();
    }

    deleteWallet = async(id) => {
        await this.db.collection('wallets').doc({id: id}).delete();
        return await this.getWallets();
    }

    getWalletTransactions = async(URL) => {
        return this.transactionsCaller.getTransactions(URL);
    }

    filterTransactions = (allTransactions, input) => {
        return allTransactions.filter((transaction) => {
            return transaction.cNameBought.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        });
    }
}

export default WalletsService;