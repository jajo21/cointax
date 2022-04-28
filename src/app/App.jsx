import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';


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

export default App;

