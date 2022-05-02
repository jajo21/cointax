import React from 'react';

import CoinsService from '../../services/api/coins-service';

class TransactionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        }

        this.coinsService = new CoinsService();
    }

    componentDidMount = async() => {
        this.setState({
            coins: await this.coinsService.getData(),
        })
    }

    render() {
        const coins = this.state.coins;
        return(
            <>
                <label>{this.props.title}<br/>
                    <select {...this.props.register} >
                        {coins.map((coin) => {
                            return (
                                <option key={coin.id} value={coin.symbol}>{coin.symbol}</option>
                            )
                        })}
                    </select>
                </label>
                <p className='error'>{this.props.errors}</p>
            </>
        )
    }
}

export default TransactionSelect;