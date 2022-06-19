// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React, {Fragment}from 'react';
import classes from './Contact.module.css';

const Card = (props) => {
    return <div className={classes.card}>{props.children}</div>
};

const SingleContact = (props) => {
    return <div className={classes.contact}>
        <img src={props.photo} alt="cat"></img>
        <div className={classes.information}>
            <h4>{props.name}</h4>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </div>
};

const Contact = ({data: contacts}) => {
    let contactCtx;
    if(Array.isArray(contacts)){
        contactCtx = contacts.map(contact => {
            return <Card><SingleContact photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email}/></Card>
        })
    } else {
        const contact = contacts;
        contactCtx = <Card><SingleContact photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email}/></Card>
    };
    return <Fragment>
        {contactCtx}
    </Fragment>
}

export default Contact;