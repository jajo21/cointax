import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {
    HashRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from './App.jsx';
import Home from './components/routes/Home.jsx';
import Transactions from './components/routes/Transactions.jsx';
import Wallet from './components/routes/Wallet.jsx';
import Tax from './components/routes/Tax.jsx';
import Register from './components/routes/Register.jsx';
import Admin from './components/routes/Admin.jsx';
import { WalletTransactionsRoute } from './components/routes/Wallet-transactions-route.jsx';

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
          <Route
            path="*"
            element={
                <p>There's nothing here!</p>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
);