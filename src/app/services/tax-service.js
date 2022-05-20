import WalletsService from "./wallets-service";

class TaxService {
    constructor() {
        this.walletsService = new WalletsService();
    }

    getTransactions = async() => {
        try{
            let wallets = await this.walletsService.getWallets();
            if(wallets.length === 0) {
                throw new Error('Ingen plånbok hittad!');
            }
            let wallet = wallets.find(wallet => wallet.walletSite === "MockKryptobörs");
            if(wallet === undefined) {
                throw new Error('Transaktioner för vissa plånböcker kan inte hämtas!');
            }
            let transactions = await this.walletsService.getWalletTransactions(wallet.apiURL);
            if(transactions === '404') {
                throw new Error('Något gick fel vid hämtning av transaktioner!');
            }
            return transactions;
        } catch (error) {
            return error.message;
        }
    }

    countTaxes = (transactions) => {

        let countedTaxTransactions = transactions.concat(); // Kopia av transaktionsarray som ska fyllas med mer info
        let totalCoins = 0; // totalt antal innehav av coins
        let totalCostAmount = 0; //Totalt omkostnadsbelopp
        let winOrLossOnSell = 0; //Vinst eller förlust

        countedTaxTransactions.map(transaction => {
            if(transaction.cNameBought === 'BTC') {
                totalCoins = totalCoins + parseInt(transaction.sumBought); //Räkna ut totala summan av alla BTC coins
                totalCostAmount = totalCostAmount + parseInt(transaction.sumSold); //Räkna ut totala omkostnadsbeloppet efter köp
                transaction.usedCostAmount = parseInt(transaction.sumSold); //Räkna ut Inköpspriset och lägg till i objektet
            }
            if(transaction.cNameSold === 'BTC') {
                transaction.usedCostAmount = Math.round((totalCostAmount/totalCoins) * parseInt(transaction.sumSold)); //Räkna ut använt omkostnadsbelopp vid försäljning och lägg till i objektet
                let totalCostPerCoin = totalCostAmount / totalCoins; //Räkna ut totala kostnad per coin
                totalCoins = totalCoins - parseInt(transaction.sumSold); // Räkna ut totala antalet BTC coins vid försäljning
                totalCostAmount = totalCostPerCoin * totalCoins; //Räkna ut totala omkostnadsbeloppet efter försäljning

                winOrLossOnSell = parseInt(transaction.sumBought) - ((totalCostAmount/totalCoins) * parseInt(transaction.sumSold)) // Räkna ut om det har gjorts vinst eller förlust på försäljning
                transaction.winOrLossOnSell = Math.round(winOrLossOnSell); //Räkna ut vinst eller förlust och lägg in i objektet
            }
            transaction.totalCoins = totalCoins; // Lägg in totala antalet coins efter transaktion i objektet
            transaction.totalCostAmount = Math.round(totalCostAmount); // Lägg till totala omkostnadsbeloppet i objektet
            transaction.averageCostAmount = Math.round(totalCostAmount/totalCoins); //Räkna ut det genomstnittliga omkostnadsbeloppet och lägg till i objektet
        });

        return countedTaxTransactions;
    }
}

export default TaxService;