import React, { useState } from "react";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Pin from "./Pin";
import { IoCloseCircle, IoSettingsOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { client } from "../client";
import { useEffect } from "react";
import { userQuery } from "../utils/data";
import { fetchUser } from "../utils/fetchUser";

const Home = () => {
  const [user, setUser] = useState(null);

  // categories Scroll references
  const scrollRef = useRef(null);

  // getting logged in user infor from the local browser storage
  const userInfo = fetchUser();

  //   Fetch that matching user from the sanity
  useEffect(() => {
    // create the sanity query to access the sanity
    const query = userQuery(userInfo?.googleId);
    client.fetch(query).then((data) => {
      console.log("data", data);
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex bg-white flex-col h-full transition-height duration-75 ease-out  '>
      <div
        className='pb-2 flex-1 h-screen overflow-y-scroll hide_scrollbar'
        ref={scrollRef}
      >
        <Routes>
          <Route path='/*' element={<Pin user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
