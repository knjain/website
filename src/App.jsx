import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import { Layout } from "./Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import Github from "./Components/Github";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userid" element={<User />} />
          <Route path="github" element={<Github/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
