import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 
// Defining state variables for contacts and appointments
//twg adding two lines here. Setting initial conditions with: '' :
  //const [contacts, setContacts] = useState([{name: '', phone: '', email: ''}]);
  //const [appointments, setAppointments] = useState([{title: '', contact: '', date: '', time: ''}]);
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

//twg adding in deletable lines for testing
/*
  const [bs, setBs] = useState([]);
  const addBs = (bsName, bsPhone) => {
    setBs([...bs,
      {
        bsName: bsName,
        bsPhone: bsPhone
      }
    ]);
  };

  const bsTestName = bs.bsName;
  const bsTestName1 = bs.bsPhone;
*/

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

// Implementing functions to add data to contacts and appointments
//twg adding lines here:
  const addContact = (name, phone, email) => {
    setContacts([...contacts,
      {
        name: name,
        phone: phone,
        email: email
      }
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
                  contacts={contacts}
                  addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
                  contacts={contacts}
                  appointments={appointments}
                  addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
