import PropTypes from 'prop-types';
import React from 'react';

import CoinsApiCaller from '../../api-callers/coins-api-caller';

class TransactionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async() => {
        this.setState({
            coins: await this.coinsCaller.getCurrencies(),
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

TransactionSelect.propTypes = {
    register: PropTypes.object,
    title: PropTypes.string,
    errors: PropTypes.array,
    show: PropTypes.string
}

export default TransactionSelect;