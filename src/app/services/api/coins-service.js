class CoinsService {
    constructor() {
        this.baseURL = 'https://retoolapi.dev/Z04hfX/';
    }

    getCurrencies = async () => {
        const URL = this.baseURL + 'cointaxcoins';
        const response = await fetch(URL);
        const data = await response.json();
        return data;

    }

    postCurrency = async (currencyName, currencySymbol, currencyType) => {
        const URL = this.baseURL + 'cointaxcoins';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                "name": currencyName,
                "symbol": currencySymbol,
                "currencyType": currencyType
            })

        });
        const data = await response.json();
        return data;
    }
}

export default CoinsService;
