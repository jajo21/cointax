import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { TransactionsProvider } from './contexts/TransactionsContext';
import ErrorBoundary from './components/error/Error-boundary.jsx';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                    <TransactionsProvider>
                        <Navbar />
                        <main>
                            <ErrorBoundary>
                                <Outlet />
                            </ErrorBoundary>
                        </main>
                        <Footer />
                    </TransactionsProvider>
            </div>
        )
    }
}

export default App;

