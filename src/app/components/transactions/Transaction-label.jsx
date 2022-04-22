import React from 'react';

class TransactionLabel extends React.Component {
    render() {
        return(
            <label>
                {this.props.title}<br/>
                <input 
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    required
                />
            </label>
        )
    }
}

export default TransactionLabel;