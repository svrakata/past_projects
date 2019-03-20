import React from 'react';
import './About.css';

const content = [
    `I have a bycicle and I use it to go to work or just to ride around the city.`,
    `I enjoy watching streamers playing games in twitch.tv.`,
    `I'm listening to music all the time. While riding, working, relaxing, cleaning the house or eating, sometimes when sleeping.`,
];

// calculate experience days here --- for fun

class About extends React.Component {
    render() {
        return (
            <section className='section about'>
                <h1 className='section__title'>About me</h1>
                {content.map((e, i) => <p className={`section__p about__p about__p-${i}`}>{e}</p>)}
            </section>
        )
    }
}

export default About;