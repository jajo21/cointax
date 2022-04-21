import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        )
    }
}

export default App;

