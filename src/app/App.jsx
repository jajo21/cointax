import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { TransactionsProvider } from './components/contexts/TransactionsContext';
import ErrorBoundary from './components/error/Error-boundary.jsx';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TransactionsProvider>
                    <ErrorBoundary>
                        <Navbar />
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </ErrorBoundary>
                </TransactionsProvider>
            </div>
        )
    }
}

export default App;

