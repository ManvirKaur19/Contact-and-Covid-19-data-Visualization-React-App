import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contact, updateContact } from '../features/contacts/contactSlice';

interface Props {
  contact: Contact;
  onUpdateContact: (updatedContact: Contact) => void; // Prop to handle contact update
  onClose: () => void; // Prop to close the modal
}

const EditContactForm: React.FC<Props> = ({ contact, onUpdateContact, onClose }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState(contact.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedContact: Contact = {
      ...contact,
      firstName,
      lastName,
      status,
    };

    dispatch(updateContact(updatedContact));
    onUpdateContact(updatedContact); // Notify parent component about the update
    onClose(); // Close the modal
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input field for first name */}
        <div>
          <label htmlFor="firstName" className="block">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded-md"
            required // Make the field mandatory
          />
        </div>
        {/* Input field for last name */}
        <div>
          <label htmlFor="lastName" className="block">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded-md"
            required // Make the field mandatory
          />
        </div>
        {/* Radio buttons for status */}
        <div>
          <label className="block">Status:</label>
          <div className="mt-1 flex">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="active"
                checked={status === 'active'}
                onChange={() => setStatus('active')}
                className="form-radio"
                required // Make the field mandatory
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="inactive"
                checked={status === 'inactive'}
                onChange={() => setStatus('inactive')}
                className="form-radio"
                required // Make the field mandatory
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="block w-full bg-blue-500 text-white py-2 rounded-md">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContactForm;
