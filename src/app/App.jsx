import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    HashRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";

import App from './App';
import Home from './components/routes/Home';
import Transactions from './components/routes/Transactions';
import Wallet from './components/routes/Wallet';
import Tax from './components/routes/Tax';
import Register from './components/routes/Register';
import Admin from './components/routes/Admin';
import { WalletTransactionsRoute } from './components/routes/Wallet-transactions-route';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        )
    }
}

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App /> }>
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="tax" element={<Tax />} />
          <Route path="admin" element={<Admin />} />
          <Route path="register" element={<Register />} />
          <Route path="wallet/:walletSite" element={<WalletTransactionsRoute/>} />
          <Route path="*"element={<p>There's nothing here!</p>}/>
        </Route>
      </Routes>
    </HashRouter>
);

