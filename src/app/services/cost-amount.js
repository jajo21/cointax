class CostAmount {

    countAmountOfCoins(transactions){
        let sum = 0;
        transactions.forEach(transaction => {
            if(transaction.cNameBought === 'BTC') {
                sum = sum + parseInt(transaction.sumBought);
            }
            if(transaction.cNameSold === 'BTC') {
                sum = sum - parseInt(transaction.sumSold);
            }
        });
        return sum;
    }

    countTransactions(transactions){
        console.log(transactions);

        let coinsBought = 0;
        let coinsSold = 0;

        for(let i = 0; i < transactions.length; i++) {
            coinsBought = coinsBought + parseInt(transactions[i].sumBought);
            coinsSold = coinsSold + parseInt(transactions[i].sumSold);
        }

        console.log(coinsBought);
        console.log(coinsSold);

        let costAmount = coinsSold/coinsBought;

        console.log(costAmount);
    }
}

export default CostAmount;