// components/ContactForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactSlice';
import { useNavigate } from 'react-router-dom';


const ContactForm: React.FC = () => {
  // Define state variables for form fields
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  // Define state variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active'); // Ensure status is of the correct type

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all fields are filled before dispatching the action
    if (firstName && lastName && (status === 'active' || status === 'inactive')) {
      // Dispatch the addContact action with the contact data
      dispatch(addContact({ firstName, lastName, status }));

      // Reset form fields after submission
      setFirstName('');
      setLastName('');
      setStatus('active');

      console.log('Form submitted!');
      navigate('/');
    } else {
      console.error('Please fill in all fields.');
    }
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
        <button type="submit" className="block w-full bg-blue-500 text-white py-2 rounded-md">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
