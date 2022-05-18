import React, {useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null, 
            errorInfo: null, 
            redirect: false,
         };
    }
    
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message

            this.setState({
                error: error,
                errorInfo: errorInfo
            })
        // You can also log error messages to an error reporting service here
    }
    
    handleClick = () => { 
        this.setState({
            redirect: true
        })
    }
    
    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Något gick fel</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                    <div>
                        <h2>Testa att uppdatera sidan på knappen här nere</h2>
                        <button onClick={() => {
                            this.handleClick();
                        }}>Uppdatera</button>
                    </div>

                    {this.state.redirect && <Navigate to="home" replace={true}/>}
                </div>
                );
        }
            // Normally, just render children
        return this.props.children;
    }
}
export default ErrorBoundary;


