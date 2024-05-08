// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import ChartsAndMapsPage from './pages/ChartsAndMapsPage';
import Sidebar from './components/SideBar';
import CreateContactPage from './pages/CreateContactPage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <Router>
      <div className="flex">
        <div className='bg-gray-800'>
          <Sidebar />
        </div>
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/create-contact" element={<CreateContactPage />} />
            <Route path="/charts-and-maps" element={<ChartsAndMapsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
