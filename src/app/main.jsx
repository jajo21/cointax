import React from 'react';
import ReactDOM from 'react-dom/client.js';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from './App.jsx';
import Home from './components/routes/home.jsx';
import Transactions from './components/routes/transactions.jsx';
import Wallet from './components/routes/wallet.jsx';
import Tax from './components/routes/tax.jsx';
import Register from './components/routes/Register.jsx';

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="app.html" element={<Home />} /> {/* Snabbt enkelt sätt att fixa så app.html blir likadan som Home */}
          <Route path="home" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="tax" element={<Tax />} />
          <Route path="register" element={<Register />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);