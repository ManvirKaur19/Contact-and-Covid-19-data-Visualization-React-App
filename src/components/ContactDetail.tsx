import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contact, deleteContact, updateContact } from '../features/contacts/contactSlice';
import Modal from './Modal';
import EditContactForm from './EditContactForm';

interface Props {
  contact: Contact;
}

const ContactDetail: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateContact = (updatedContact: Contact) => {
    dispatch(updateContact(updatedContact));
    setIsModalOpen(false); // Close the modal after updating the contact
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${contact.firstName} ${contact.lastName}?`);

    if (confirmDelete) {
      dispatch(deleteContact(contact.id));
      console.log('Contact deleted successfully:', contact);
    } else {
      console.log('Deletion cancelled.');
    }
  };

  return (
    <div>
    <h3 className="text-lg font-semibold max-w-xs sm:max-w-none overflow-hidden overflow-ellipsis text-center px-4">{contact.firstName} {contact.lastName}</h3>
        <p className="text-sm text-gray-600 text-center px-4">{contact.status}</p>
      <div className="flex justify-center mt-2">
        <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition duration-150 ease-in-out" onClick={handleEdit}>Edit</button>
        <div className="w-4"></div> {/* Add a spacer */}
        <button className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition duration-150 ease-in-out ml-1" onClick={handleDelete}>Delete</button>
      </div>

      {/* Modal for editing contact */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <EditContactForm contact={contact} onUpdateContact={handleUpdateContact} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default ContactDetail;