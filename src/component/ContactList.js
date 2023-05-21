import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

  return (
    <>
      <div className='container'>
        <h5 className='navbar-brand'>Contact List</h5>
        <br />
        <div className='row'>
          {
            props.contacts.map((contact) => {
              return <ContactCard key={contact.id} contact={contact} onDelete={props.onDelete} />
            })
          }
          <br></br>
        </div>
      </div>
    </>
  );
}

export default ContactList;