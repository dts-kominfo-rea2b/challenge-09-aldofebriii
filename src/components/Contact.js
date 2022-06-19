// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import classes from './Contact.module.css';

const Card = (props) => {
    return <div className={classes.card}>{props.children}</div>
};

const SingleContact = (props) => {
    return <Card>
        <div className={classes.contact}>
            <img src={props.photo} alt="cat"></img>
            <div className={classes.information}>
                <h4>{props.name}</h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    </Card>
};

const Contact = ({data: contacts}) => {
    let contactCtx;
    if(Array.isArray(contacts)){
        contactCtx = contacts.map((contact,i) => {
            return <li key={i}>
                <SingleContact photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email}/>
            </li>
        })
    } else {
        const contact = contacts;
        const contactId = Math.random() * 10
        contactCtx = <li key={contactId}><SingleContact id={contactId}photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email}/></li>
    };
    return <ul>
            {contactCtx}
        </ul>
}

export default Contact;