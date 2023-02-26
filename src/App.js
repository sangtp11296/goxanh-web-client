import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ButtonToTop } from "./components/ButtonToTop/ButtonToTop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import {Product} from "./Pages/Product/Product";
import { Shop } from "./Pages/Shop/Shop";

function App() {
  return (
    <Router>
      <ButtonToTop/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/1' element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
