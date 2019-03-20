import React from 'react';
import './work.css';

const workData = [
    {
        title: 'work 1',
        imgSrc: '/imgsource.jpg',
        description: 'some description over here to explain the shit',
    },
    {
        title: 'work 2',
        imgSrc: '/imgsource.jpg',
        description: 'some description over here to explain the shit',
    },
    {
        title: 'work 3',
        imgSrc: '/imgsource.jpg',
        description: 'some description over here to explain the shit',
    },
    {
        title: 'work 4',
        imgSrc: '/imgsource.jpg',
        description: 'some description over here to explain the shit',
    },
]

const WorkItem = ({ item }) => {
    return (
        <li className="work__item">
            {item.title}
        </li>
    );
};

const workList = workData.map((e, i) => <WorkItem item={e} key={i}></WorkItem>);

const Work = () => {
    return (
        <section name="work" className="work section">
            <div className="container">
                <h2 className="section__title">Work</h2>


                <ul className="work__list">
                    {workList}
                </ul>
            </div>
        </section>
    );
};

export default Work;