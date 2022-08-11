import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for
  contact info and duplicate check
  */

//twg adding below name, phone, email
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dupName, setDupName] = useState(false);
  //const [bsName, setBsName] = useState('');
  //const [bsPhone, setBsPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!dupName) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    //addBs(bsName, bsPhone);
    //setBsName('');
    //setBsPhone('');
  };

  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  //twg set duplicate to true if name already exists in contacts
    useEffect(() => {
      const checkForDupName = () => {
        const found = contacts.find((contact) => contact.name === name);
        //if (found === true) {                     <<original
        if (found !== undefined) {
          return true;
        }
        return false
      };

      if (checkForDupName()) {
        setDupName(true);
      } else {
        setDupName(false);
      }
    }, [name, contacts, dupName]);


  return (
    <div>
      <section>
        <h2>
          Add Contact
          {dupName ? 'Name has already been entered' : ''}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          //bsName={bsName}
          //setBsName={setBsName}
          //bsPhone={bsPhone}
          //setBsPhone={setBsPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
