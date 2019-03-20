import React, { Component } from 'react';
import { Link } from 'react-scroll';

import { throttle } from 'lodash';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { change: false };
    }

    scrollHandler = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        if (scrollTop > windowHeight - 90) {
            this.setState({ change: true });
        } else {
            this.setState({ change: false });
        }

    }

    componentDidMount = () => {
        window.addEventListener('scroll', throttle(this.scrollHandler, 100, { 'trailing': true }));
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', throttle(this.scrollHandler, 100, { 'trailing': true }));
    };

    render() {
        return (
            <header ref="elem" className={`header ${this.state.change ? 'header--white' : ''}`}>
                <div className="container container--flex">
                    <Link to="home" spy={true} smooth={true} duration={500} className="logo">
                        <svg _ngcontent-c1="" viewBox="0 0 131 97.48" xmlns="http://www.w3.org/2000/svg">
                            <g _ngcontent-c1="" data-name="Layer 2" id="Layer_2">
                                <g _ngcontent-c1="" data-name="Layer 1" id="Layer_1-2">
                                    <rect fill="none" height="91.48" rx="9.3" ry="9.3" strokeMiterlimit="10" strokeWidth="6" width="125" x="3" y="3"></rect>
                                    <rect height="6.83" rx="3.39" ry="3.39" width="6.83" x="99.54" y="14.25"></rect>
                                    <rect height="6.83" rx="3.39" ry="3.39" width="6.83" x="16.27" y="20.4"></rect>
                                    <path d="M110.46 58.62V23.81H96.81V32h5.46v26.62h-11.6v-47.1H77v8.2h5.46v38.9H70.87V23.81H57.22V32h5.46v26.62h-7.51a4.09 4.09 0 0 1-4.09-4.09V23.81h-15.7a12.29 12.29 0 0 0-12.21 10.92h-.08V73A4.09 4.09 0 0 1 19 77.05h-6.14v8.19H19A12.28 12.28 0 0 0 31.28 73V36.1a4.1 4.1 0 0 1 4.1-4.1h7.51v22.53a12.28 12.28 0 0 0 12.28 12.28h62.12v-8.19z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link activeClass="nav__active" className="nav__link" to="home" spy={true} smooth={true} duration={500}>home</Link>
                            </li>
                            <li className="nav__item">
                                <Link activeClass="nav__active" className="nav__link" offset={0} to="about" spy={true} smooth={true} duration={500}>about</Link>
                            </li>
                            <li className="nav__item">
                                <Link activeClass="nav__active" className="nav__link" offset={0} to="skills" spy={true} smooth={true} duration={500}>skills</Link>
                            </li>
                            <li className="nav__item">
                                <Link activeClass="nav__active" className="nav__link" offset={0} to="work" spy={true} smooth={true} duration={500}>work</Link>
                            </li>
                            <li className="nav__item">
                                <Link activeClass="nav__active" className="nav__link" offset={0} to="contact" spy={true} smooth={true} duration={500}>contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;