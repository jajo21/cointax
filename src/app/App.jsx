import React from 'react';
import ReactDOM from 'react-dom/client.js';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export default App;

