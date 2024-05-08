// pages/CreateContactPage.tsx

import React from 'react';
import ContactForm from '../components/ContactForm';

const CreateContactPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
      <ContactForm />
    </div>
  );
};

export default CreateContactPage;
