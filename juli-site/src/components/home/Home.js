import React from 'react';
import './home.css';
import Particles from 'react-particles-js';

import arrowImg from '../../img/image.svg';

const particlesStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
};

const particlesConfig = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800,
            }
        },
        color: {
            value: '#000000',
        },
        shape: {
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
            type: 'circle',
        },
        size: {
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
            },
            value: 3,
            random: true,
        },
        opacity: {
            anim:{
                enable: true,
                speed: 0.9,
                opacity_min: 0,
            
            },
            value: 0.5,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            random: true,
            speed: 0.7,
        }

    }
};

const Home = () => {
    return (
        <section name="home" className="home">

            <div className="home__header">

                <h1 className="home__title">
                    <span className="light-font">Juli</span>
                    <span className="bold-font">Kirilova</span>
                </h1>

                <div className="home__line"></div>

                <h2 className="home__subtitle light-font">designer</h2>

                <div className="home__line home__line--shorter"></div>

            </div>

            <div className="home__arrow">
                <img src={arrowImg} className="home__img" alt=""/>
            </div>

            <Particles
                style={particlesStyles}
                params={particlesConfig}
            ></Particles>

        </section>
    );
};


export default Home;