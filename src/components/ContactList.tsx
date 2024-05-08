// components/ContactList.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';
import ContactDetail from './ContactDetail';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className=" mx-auto bg-white shadow-md rounded-md">
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Contact List</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-gray-100 p-3 rounded-md justify-items-center  my-auto">
          <ContactDetail contact={contact}></ContactDetail>
        </div>
      ))}
    </div>
  </div>
  <div className="p-6">
    <Link to="/create-contact" className="block max-w-xs bg-blue-500 text-white py-2 rounded-md text-center mx-auto">Create Contact</Link>
  </div>
</div>
  );
};

export default ContactList;
