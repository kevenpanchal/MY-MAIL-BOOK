import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './AddContact';
import ContactList from './ContactList';

function App() {
  const savedContacts = localStorage.getItem("savedcontacts")

  const [contacts, setcontacts] = useState(savedContacts ? JSON.parse(savedContacts) : []);
  const addcontact = (values) => {
    if (contacts.length === 0) {
      values.id = 1;
    }
    else {
      values.id = contacts[contacts.length - 1].id + 1;
    }
    const newcontact = {
      id: values.id,
      name: values.name,
      email: values.email,
    }
    setcontacts([...contacts, newcontact]);
    // localStorage.setItem("Savedcontacts",JSON.stringify(newcontact));

  }
  // useEffect(() => {
  //   const value = localStorage.getItem("savedcontacts");
  //   if(value){
  //     return JSON.parse(value);}
  //     else{

  //     }
  //   },[]);

  useEffect(() => {
    localStorage.setItem("savedcontacts", JSON.stringify(contacts));
  }, [contacts]);


  const onDelete = (id) => {
    setcontacts(contacts.filter((contact) => {
      return id !== contact.id
    }));
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Addcontact addcontact={addcontact} />
      </div><br></br>
      <div>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default App;
