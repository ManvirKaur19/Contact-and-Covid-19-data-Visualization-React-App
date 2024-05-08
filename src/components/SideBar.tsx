import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 flex flex-col h-screen w-48">
      <div className="p-4 text-white font-bold">Menu</div>
      <ul className="p-2 flex-grow">
        <li className={`py-2 ${location.pathname === '/' || location.pathname === '/create-contact' ? 'bg-gray-700' : ''}`}>
          <Link to="/" className="block text-white px-4 py-2 rounded">Contacts</Link>
        </li>
        <li className={`py-2 ${location.pathname === '/charts-and-maps' ? 'bg-gray-700' : ''}`}>
          <Link to="/charts-and-maps" className="block text-white px-4 py-2 rounded">Charts & Maps</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
