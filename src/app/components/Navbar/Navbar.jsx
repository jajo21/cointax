import React from 'react';

import { menuItems } from './menu-items.js';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            menuClicked: false,
            cointaxClicked: false
        }
    }

    handleMenuClick = () => {
        this.setState({menuClicked: !this.state.menuClicked});
    }

    handleCointaxClick = () => {
        this.setState({cointaxClicked: !this.state.cointaxClicked});
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 
                    className={this.state.cointaxClicked ? 'navbar-logo spiral' : 'navbar-logo'} 
                    onClick={this.handleCointaxClick}>
                        Cointax
                    <i className="fa fa-solid fa-coins"></i>
                </h1>
                <div className='menu-icon' onClick={this.handleMenuClick}>
                    <i className={this.state.menuClicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.menuClicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} /* onClick={(window.innerWidth < 960) ? this.handleMenuClick : null} */ >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        ) 
    }
}

export default Navbar;