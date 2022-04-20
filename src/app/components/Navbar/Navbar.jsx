import React from 'react';

import { MenuItems } from './MenuItems.js';
import { Button } from '../Button.jsx';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    handleLinkClick = (title) => {
        console.log(title);


        /* onClick={() => this.handleLinkClick(item.title) i LINK */
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Cointax<i className="fa fa-solid fa-coins"></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} onClick={() => this.handleLinkClick(item.title)}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>{MenuItems[4].title}</Button>
            </nav>
        ) 
    }
}

export default Navbar;