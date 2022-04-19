import React from 'react';
import ReactDOM from 'react-dom/client.js';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';

class Main extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Content />
                <Footer />
            </>
        )
    }
}

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(<Main />);

