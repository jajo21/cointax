import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { TransactionsProvider } from './contexts/TransactionsContext.js';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TransactionsProvider>
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </TransactionsProvider>
            </div>
        )
    }
}

export default App;

