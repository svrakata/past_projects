import React from 'react';

import Nav from './Nav';

import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className='header'>
                <Nav></Nav>
            </header>
        )
    }
}

export default Header;