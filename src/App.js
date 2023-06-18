import React from "react";
import Header from "./component/Header/Header";
import Gallery from "./component/pages/Gallery";
import Service from "./component/pages/Service";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
