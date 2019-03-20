import React from 'react';

import Header from './components/layout/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';

const Client = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Work></Work>
            <Contact></Contact>
        </React.Fragment>
    );
}

export default Client;