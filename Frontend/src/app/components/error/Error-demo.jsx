import React, { Component } from 'react'

export default class ErrorDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        if (this.state.count === 5) {
            throw new Error ('You reached five!');
        }else {
            return (
                <div>
                    <h3>ErrorBoundary demo</h3>
                    <p>(försök nå 5)</p>
                    {this.state.count}
                    <br />
                    <button onClick={this.handleClick}>Plus</button>
                </div>
            )
        }
    }
}
