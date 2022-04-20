import React from 'react';
import ReactDOM from 'react-dom/client.js';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar/Navbar.js';
import Content from './components/Content.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Content />
                <Footer />
            </div>
        )
    }
}

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(<App />);

