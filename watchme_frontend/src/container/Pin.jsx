import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreatePin from "../components/CreatePin";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import PinDetail from "../components/PinDetail";
import Search from "../components/Search";
import UserProfile from "../components/UserProfile";

const Pin = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='px-2 md:px-5 '>
      <div className='bg-white'>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </div>

      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='user-profile/:userId' element={<UserProfile />} />
          <Route path='/category/:categoryId' element={<Feed />} />
          <Route
            path='/pin-detail/:pinId'
            element={<PinDetail user={user} />}
          />
          <Route path='/create-pin' element={<CreatePin user={user} />} />
          <Route
            path='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pin;