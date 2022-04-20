import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from './App.jsx';
import Home from './components/Routes/home.jsx';
import Transactions from './components/Routes/transactions.jsx';
import Wallet from './components/Routes/wallet.jsx';
import Tax from './components/Routes/tax.jsx';

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="tax" element={<Tax />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);