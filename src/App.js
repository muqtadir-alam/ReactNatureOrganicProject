import React from 'react';
import './App.css';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import NavBar from "./components/NavBar"
import Testimonials from "./components/Testimonials"
import Subscription from "./components/Subcription"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <NavBar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Testimonials />
      <Subscription />
      <Blog />
      <Footer/>
      </>
  );
}

export default App;
