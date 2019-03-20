import React from 'react';

import './Skills.css';

import html from './../../img/html5.svg';
import css from './../../img/css.svg';
import sass from './../../img/sass.svg';
import jquery from './../../img/jquery.svg';
import es6 from './../../img/es6.svg';
import ai from './../../img/illustrator.svg';
import angular from './../../img/angular.svg';
import react from './../../img/react.svg';
import ps from './../../img/photoshop.svg';
import js from './../../img/logo-javascript.svg';
import webpack from './../../img/webpack.svg';
import node from './../../img/nodejs.svg';
import linux from './../../img/linux.svg';
import git from './../../img/git.svg';

const skills = [
    {
        src: html,
        skill: 'html',
        progress: 85,
    },
    {
        src: css,
        skill: 'css',
        progress: 85,
    },
    {
        src: sass,
        skill: 'sass',
        progress: 35,
    },
    {
        src: js,
        skill: 'js',
        progress: 80,
    },
    {
        src: es6,
        skill: 'es6',
        progress: 65,
    },
    {
        src: webpack,
        skill: 'webpack',
        progress: 60,
    },
    {
        src: jquery,
        skill: 'jQuery',
        progress: 70,
    },
    {
        src: angular,
        skill: 'angular',
        progress: 35,
    },
    {
        src: react,
        skill: 'react',
        progress: 25,
    },
    {
        src: node,
        skill: 'node',
        progress: 40,
    },
    {
        src: git,
        skill: 'git',
        progress: 50,
    },
    {
        src: linux,
        skill: 'linux',
        progress: 20,
    },
    {
        src: ps,
        skill: 'ps',
        progress: 45,
    },
    {
        src: ai,
        skill: 'ai',
        progress: 55,
    },
];

class Skills extends React.Component {
    render() {
        return(
            <section className='section skills'>
                <h1 className='section__title'>skills</h1>
                <ul className="skills__list">
                    {skills.map((e, i) => <SkillsItem src={e.src} skill={e.skill} progress={e.progress} key={i} index={i}></SkillsItem>)}                
                </ul>
            </section>
        )
    }
}

function SkillsItem (props) {
    return (
        <li className={`skills__item skills__item-${props.index}`}>
            <div className="skills__img-wrapper">
                <img className="skills__img" src={props.src} alt={`${props.skill} logo`}/>
            </div>
            <span className="skills__title">{props.skill}</span>
            <ProgressBar progress={props.progress}></ProgressBar>
        </li>
    )
}


function ProgressBar (props) {
    const widthSize = `${props.progress}%`;
    return (
        <div className="progress">
            <div className="progress__bar" style={{width: widthSize}}></div>
        </div>
    )
}

export default Skills;