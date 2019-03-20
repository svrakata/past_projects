import React from 'react';

import './Work.css';

import frontEndProjectImg from './../../img/front_end_project.jpg';
import daisProjectImg from './../../img/dais_project.jpg';
import angularProjectImg from './../../img/angular_project.jpg';
import jqueryProjectImg from './../../img/jqury_project.jpg';

const images = [
    {
        src: frontEndProjectImg,
        href: 'https://donothingclub7.firebaseapp.com/',
        title: ' Single page application by a given design',
        description: ''
    },
    {
        src: daisProjectImg,
        href: 'https://deeppockets-70a3b.firebaseapp.com/',
        title: 'Simple UI for a personal bank account',
        description: ''
    },
    {
        src: angularProjectImg,
        href: 'https://thecheapbears-38177.firebaseapp.com/',
        title: 'Web application with Angular 4',
        description: ''
    },
    {
        src: jqueryProjectImg,
        href: 'https://naga-389d5.firebaseapp.com/',
        title: 'Single Page Application with jQuery',
        description: ''
    },
]

class Work extends React.Component {
    getWorkList() {
        return images.map((e, i) => <WorkListItem src={e.src} href={e.href} title={e.title} description={e.description} index={i} key={i}></WorkListItem>)
    }
    
    render() {
        return(
            <section className='section'>
                <h1 className='section__title'>work</h1>

                <ul className="work__list">
                    {this.getWorkList()}
                </ul>
            </section>
        )
    }
}

function WorkListItem(props) {
    return (
        <li className={`work__item work__item-${props.index}`}>

            <div className="work__info">
                <h2 className="work__title">
                    {props.title}
                </h2>

                <p className="work__p">
                    {props.description}
                </p>
            </div>

            <div className="work__img-wrapper">
                <img className="work__img" src={props.src} alt="website presentational screenshot" />
            </div>
            <a className="work__link" href={props.href}></a>
        </li>
    )
}

export default Work;