import React from 'react';
import './Contact.css';

const contacts = [
    {
        href: 'mailto:k.kamenov.v8@gmail.com',
        content: 'k.kamenov.v8@gmail.com',
    },
    {
        href: 'https://github.com/svrakata',
        content: 'github',
    },
    {
        href: 'https://codepen.io/svrakata',
        content: 'codepen',
    },
];

class Contact extends React.Component {
    render() {
        return (
            <section className='section'>
                <h1 className='section__title'>contact</h1>
                <ul className="contact__list">
                    {contacts.map((e, i) => <ContactItem href={e.href} content={e.content}></ContactItem>)}
                </ul>
            </section>
        )
    }
}

function ContactItem(props) {
    return (
        <li className="contact__item">
            <a className="contact__link" href={props.href}>{props.content}</a>
        </li>
    )
}
export default Contact;