import React from 'react';
import './skills.css';

const progressLength = 7;

const skills = [
    {
        name: 'Adobe Photoshop',
        level: 4,
    },
    {
        name: 'Adobe Illustrator',
        level: 4,
    },
    {
        name: 'Adobe Xd',
        level: 3,
    },
    {
        name: 'HTML',
        level: 2,
    },
    {
        name: 'CSS',
        level: 2,
    },
];

const SKillProgress = ({ level }) => {
    const arr = Array.from({ length: progressLength }, (v, i) => {
        if (i < level) {
            return 'progress__point--filled';
        } else {
            return '';
        }
    });

    return (
        <div className="progress">
            {arr.map((e, i) => <div className={`progress__point ${e}`} key={i}></div>)}
        </div>
    );
}

const SklillsItem = ({ item }) => {
    return (
        <li className="skills__item">
            <h3 className="skills__name">
                {item.name}
            </h3>
            <SKillProgress level={item.level}></SKillProgress>
        </li>
    );
};

const skillsSet = skills.map((e, i) => <SklillsItem key={i} item={e}></SklillsItem>)

const Skills = () => {
    return (
        <section name="skills" className="skills section">
            <div className="container">
                <h2 className="section__title skills__title">Skills</h2>

                <ul className="skills__list">
                    {skillsSet}
                </ul>
            </div>
        </section>
    );
};

export default Skills;