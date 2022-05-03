import React from 'react';
import WalletsService from '../../services/wallets-service';

class WalletTransactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: null
        }

        this.walletsService = new WalletsService();
    }

    componentDidMount = async() => {
        let transactions = await this.walletsService.getWalletTransactions(this.props.wallet.apiURL);
        this.setState({
            transactions
        });
    }

    render() {
        console.log(this.state.transactions);
        return (
            <div>
                <h1>Transaktioner</h1>
            </div>
        );

    }
}

export default WalletTransactions;