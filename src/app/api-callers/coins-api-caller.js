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
            const data = await response.json();
            return data;
        } catch(error) {
            return {status: error.message, message: 'Något gick fel vid hämtning av valutor!'};
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
        } catch(error) {
            return {status: error.message, message: 'Något gick fel... valutan är inte sparad!'};
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
        } catch (error) {
            return {status: error.message, message: 'Något gick fel vid borttagning!'};
        }
    }
}

export default CoinsApiCaller;
