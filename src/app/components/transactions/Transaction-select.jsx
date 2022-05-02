import React from 'react';

class TransactionSelect extends React.Component {
    render() {
        return(
            <>
                <label>{this.props.title}<br/>
                    <select {...this.props.register} >
                        <option value="BTC">BTC</option>
                        <option value="SEK">SEK</option>
                    </select>
                </label>
                <p className='error'>{this.props.errors}</p>
            </>
        )
    }
}

export default TransactionSelect;