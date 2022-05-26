class CoinsApiCaller {
    constructor() {
        this.baseURL = 'https://retoolapi.dev/sX9GgF/';
    }

    getCurrencies = async () => {
        const URL = this.baseURL + 'cointaxcoins';
        try {
            const response = await fetch(URL);
            if(!response.ok) {
                throw new Error(response.status)
            }
            const currencies = await response.json();
            return [currencies, null];
        } catch(err) {
            const error = {status: err.message, message: 'Något gick fel vid hämtning av valutor!'}
            return [null, error];
        }
    }

    postCurrency = async (currencyName, currencySymbol, currencyType) => {
        const URL = this.baseURL + 'cointaxcoins';
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({
                    "name": currencyName,
                    "symbol": currencySymbol,
                    "currencyType": currencyType
                })
            });
            if(!response.ok) {
                throw new Error(response.status)
            }
            return [response.status, null]
        } catch(err) {
            const error = {status: err.message, message: 'Något gick fel... valutan är inte sparad!'};
            return [null, error];
        }
    }

    deleteCurrency = async (id) => {
        const URL = this.baseURL + 'cointaxcoins/' + id;
        try {
            const response = await fetch(URL, {
                method: 'DELETE'
            });
            if(!response.ok) {
                throw new Error(response.status)
            }
            const [currencies, error] = await this.getCurrencies();
            if(currencies !== null) {
                return [currencies, null]
            }else {
                throw new Error("Kunde inte hämta valutor")
            }
        } catch (err) {
            const error = {status: err.message, message: 'Något gick fel vid borttagning!'};
            return [null, error];
        }
    }
}

export default CoinsApiCaller;
