import React, { Component } from 'react';
import firebase from './../../../firebase';

const database = firebase.database();

class AboutPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paragraphText: '',
            pargraphList: [],
        }

        this.textArea = React.createRef();
    }

    componentDidMount() {
        const paragaphsRef = database.ref('about');
        paragaphsRef.once('value')
            .then((snapshot) => {
                const paragraphs = Object.values(snapshot.val()) || [];
                this.setState({ pargraphList: paragraphs });
            });
    }

    handlePrahraph = (event) => {
        this.setState({ paragraphText: event.target.value });
    }

    setAboutParagraph = () => {
        const newParagraphKey = database.ref().child('about').push().key;
        const paragaphsRef = database.ref('about');
        database.ref(`about/${newParagraphKey}`).set(this.state.paragraphText)
            .then(() => {
                this.textArea.current.value = '';
            })
        paragaphsRef.once('value')
            .then((snapshot) => {
                this.setState({ pargraphList: Object.values(snapshot.val()) });
            });
    }

    render() {
        return (
            <div className="form-group">


                <h2>Въведи нов параграф към личната информация</h2>

                <textarea ref={this.textArea} onChange={this.handlePrahraph} className="panel__about"></textarea>
                <button onClick={this.setAboutParagraph} className="panel__submit">Запиши</button>

                <ul className="panel__about-list">
                    {this.state.pargraphList.map((e, i) => <p key={i} className="about__p">{e}</p>)}
                </ul>

            </div>
        )
    };
};

export default AboutPanel;
