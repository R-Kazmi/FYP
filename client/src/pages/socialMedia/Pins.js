import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar2 from '../../components/navbar/Navbar2';
import Feed2 from '../../components/socialMedia/feed2/Feed2';
import PinDetail from '../../components/socialMedia/pinDetail/PinDetail';
import CreatePin from '../../components/socialMedia/createPin/CreatePin';
import Search from '../../components/socialMedia/search/Search';

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar2 searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed2 />} />
          <Route path="/category/:categoryId" element={<Feed2 />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user} />} />
          <Route path="/create-pin" element={<CreatePin user={user && user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;