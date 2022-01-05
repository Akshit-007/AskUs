import React, { useEffect } from "react";
// import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux"

import { getPosts } from "./actions/posts"
import Home from "./Components/Home.js";
import Auth from "./Components/Auth.js";
import Discuss from "./Components/Discuss.js";
import Community from "./Components/Community.js";

const App = () => {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <Navbar user={user} /> */}
      <Routes>


        <Route exact path="/" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/community" element={<Community />} />
        <Route path="/auth" element={<Auth />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;