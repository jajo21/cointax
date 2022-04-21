import React from 'react';

import { MenuItems } from './menu-items.js';
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
                                <Link to={item.url} className={item.cName}>
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