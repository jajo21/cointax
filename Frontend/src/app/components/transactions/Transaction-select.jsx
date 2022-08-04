import PropTypes from 'prop-types';
import React from 'react';
import CoinsApiCaller from '../../api-callers/coins-api-caller';

class TransactionSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coins: null,
            error: null
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async () => {
        const [data, error] = await this.coinsCaller.getCurrencies();

        if (data !== null) {
            this.setState({
                coins: data
            })
        } else {
            this.setState({
                error: error
            })
        }
    }


    render() {
        const coins = this.state.coins;
        const error = this.state.error;
        return (
            <>
                <label>{this.props.title}<br />
                    <select {...this.props.register} >
                        {coins && coins.map((coin) => {
                            return (
                                <option key={coin.id} value={coin.symbol}>{coin.symbol}</option>
                            )
                        })}
                    </select>
                        {error &&
                            <div className="error" style={{textAlign: 'center'}}>
                                <p>{error.message}</p>
                                <p>Status: {error.status}</p>
                            </div>
                        }
                </label>
                <p className='error'>{this.props.errors}</p>
            </>
        )
    }
}

TransactionSelect.propTypes = {
    register: PropTypes.object,
    title: PropTypes.string,
    errors: PropTypes.string
}

export default TransactionSelect;