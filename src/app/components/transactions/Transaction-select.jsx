import React from 'react';

class TransactionSelect extends React.Component {
    render() {
        return(
            <>
                <label>{this.props.title}<br/>
                    <select {...this.props.register} value={this.props.show} >
                        <option value="BTC">BTC</option>
                        <option value="BNB">BNB</option>
                        <option value="USDT">USDT</option>
                        <option value="SEK">SEK</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
                <p>{this.props.errors}</p>
            </>
        )
    }
}

export default TransactionSelect;