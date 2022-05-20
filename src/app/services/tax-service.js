class TaxService {

    countTaxes = (transactions) => {
        this.sortTransactionsForTaxes(transactions); //Sorterar transactions så att det är sorterat i rätt ordning för att kunna räkna skatt
        let countedTaxTransactions = transactions.concat();// Kopia av transaktionsarray som ska fyllas med mer info
        this.sortTransactionsForView(transactions); //Sorterar tillbaka transactions till så som jag vill att användaren ska se transaktionerna.
        
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
                if(transaction.totalCoins === 0) {
                    winOrLossOnSell = transaction.sumBought - transaction.usedCostAmount;
                    transaction.winOrLossOnSell = Math.round(winOrLossOnSell)
                } else {
                    winOrLossOnSell = parseInt(transaction.sumBought) - ((totalCostAmount/totalCoins) * parseInt(transaction.sumSold)) // Räkna ut om det har gjorts vinst eller förlust på försäljning
                    transaction.winOrLossOnSell = Math.round(winOrLossOnSell); //Räkna ut vinst eller förlust och lägg in i objektet
                }
            }
            transaction.totalCoins = totalCoins; // Lägg in totala antalet coins efter transaktion i objektet
            transaction.totalCostAmount = Math.round(totalCostAmount); // Lägg till totala omkostnadsbeloppet i objektet
            transaction.averageCostAmount = Math.round(totalCostAmount/totalCoins); //Räkna ut det genomstnittliga omkostnadsbeloppet och lägg till i objektet
        });

        return countedTaxTransactions;
    }

    sortTransactionsForTaxes = (transactions) => {
        transactions.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })
    }

    sortTransactionsForView = (transactions) => {
        transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
    }
}

export default TaxService;