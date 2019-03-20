import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className='section home'>
                    <h2 className='home__title'>kamen kamenov</h2>
                    <h1 className='home__subtitle'>front-end developer</h1>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;