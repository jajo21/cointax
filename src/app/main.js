import React from 'react';
import ReactDOM from 'react-dom/client.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(<Main />);

