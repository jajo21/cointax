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

    getWalletTransactions = async (wallet) => {
        let transactions = await this.transactionsCaller.getTransactions(wallet.apiURL);
        transactions.map(transaction => {
            return (
                transaction.walletSite = wallet.walletSite,
                transaction.walletId = wallet.id
            )
        });
        this.sortTransactions(transactions);
        return transactions
    }

    filterTransactions = (allTransactions, input) => {
        return allTransactions.filter((transaction) => {
            return transaction.cNameBought.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        });
    }

    sortTransactions = (transactions) => {
        transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
    }
}

export default WalletsService;