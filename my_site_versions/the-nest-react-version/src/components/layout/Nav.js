import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const menus = [
    {
        name: 'home',
        url: '/',
    },
    {
        name: 'about',
        url: '/about',
    },
    {
        name: 'skills',
        url: '/skills',
    },
    {
        name: 'work',
        url: '/work',
    },
    {
        name: 'contact',
        url: '/contact',
    },
];

function Nav(props) {
    return (
        <ul className='nav__list'>
            {menus.map((e, i) => <Li key={i} name={e.name} url={e.url}></Li>)}
        </ul>
    )
}

function Li(props) {

    return (
        <li className='nav__item'>
            <NavLink to={props.url} exact className='nav__a' activeClassName='nav__a--active'>{props.name}</NavLink>
        </li>
    )
};

export default Nav;