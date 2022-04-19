import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <h1>Cointax</h1>
                    <div id="hem">Hem</div>
                    <div id="wallet">Wallet</div>
                    <div id="transaktion">Transaktioner</div>
                    <div id="k4">Skatte-rapport/k4</div>
                    <div id="settings">Inställningar</div>
                </nav>
            </header>
        )
    }
}