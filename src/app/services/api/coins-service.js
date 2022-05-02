class CoinsService {

    getData = async () => {
        const baseURL = 'https://retoolapi.dev/Z04hfX/cointaxcoins';

        const response = await fetch(baseURL);
        const data = await response.json();
        return data;

    }
}

export default CoinsService;
