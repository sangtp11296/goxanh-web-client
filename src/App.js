import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
