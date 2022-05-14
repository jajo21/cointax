import PropTypes from 'prop-types';
import React from 'react';

class TransactionSelect extends React.Component {
    render() {
        const coins = this.props.coins;
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
    coins: PropTypes.array,
    register: PropTypes.object,
    title: PropTypes.string,
    show: PropTypes.string
}

export default TransactionSelect;