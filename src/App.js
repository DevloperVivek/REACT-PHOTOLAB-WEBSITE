import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Gallery from "./Components/MainGallery/Gallery/Gallery";
import Footer from "./Components/Layout/Footer/Footer";
import About from "./Components/Pages/About/About";
import Favourite from "./Components/MainGallery/Favourites/Favourite";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/albums" element={<Gallery />} />
          <Route path="/favorites" element={<Gallery />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
