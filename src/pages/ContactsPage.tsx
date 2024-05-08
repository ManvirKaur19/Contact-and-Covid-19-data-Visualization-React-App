// ContactsPage.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactDetail from '../components/ContactDetail';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const ContactsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className=" bg-white p-6 rounded-md">
      {contacts.length === 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">No Contacts Found</h2>
          <p className="mb-4 text-center">Please add contacts by clicking the button below:</p>
           <Link to="/create-contact" className="block max-w-xs bg-blue-500 text-white py-2 rounded-md text-center mx-auto">Create Contact</Link>

        </>
      ) : (
        <>
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
