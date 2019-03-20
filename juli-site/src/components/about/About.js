import React, { Component } from 'react';
import profilePic from '../../img/profile.jpg';

import firebase from './../../firebase';

import './about.css';

const database = firebase.database();

const paragraphs = [
    'I’m Juli, a self-taught newbie in the designing world.',
    'This site will be dedicated mainly to my searches in this new field. For the last ten years I’d been working in tourist industry and been able to explore a few countries mainly in Europe.',
    'A year ago I decided to make a new start and follow my hear t. It wasn’t an easy decision but ever ything is possible...with lots of work.',
    'I have a passion for clean and simple design look. For the time being I’m using Photoshop, Illustrator, Xd and some simple HTML & CSS.',
    'Looking forward to further develop my skills and get hands-on different design challenges.',
];

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pargraphList: [],
        }
    }


    componentDidMount() {
        const paragaphsRef = database.ref('about');
        paragaphsRef.once('value')
            .then((snapshot) => {
                console.log(snapshot.val());
                this.setState({ pargraphList: Object.values(snapshot.val()) });
            });
    }

    render() {
        return (
            <section name="about" className="about section">
                <div className="container">
                    <h2 className="section__title">About me</h2>

                    <div className="about__wrapper">
                        <div className="about__img-wrapper">
                            <img src={profilePic} className="about__img" alt="" />
                        </div>

                        <div className="about__info">
                            {paragraphs.map((e, i) => <p className="about__p" key={i}>{e}</p>)}
                        </div>

                    </div>

                </div>
            </section>
        );
    }
};

export default About;