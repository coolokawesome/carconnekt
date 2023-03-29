import {React, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Team from './components/Team';
import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeFleet from './components/HomeFleet';
import NavFleet from './components/navComponents/navFleet';
import logo from './components/images/logo.png'
import NavTestimonials from './components/navComponents/navTestimonials';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar
         
         expand="lg">
        <div className='container nav-container'>
          <Navbar.Brand as={Link} to="/">
            <img 
              width='160'
              classname='img img-fluid logo'
              src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav d-flex justify-content-center" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end me-auto">
            <Nav className=" justify-content-end ms-auto" >              
              <Nav.Link as={Link} className='px-4 px-md-2' to="/">Home</Nav.Link>
              <Nav.Link as={Link} className='px-4 px-md-2'  to="/About">About</Nav.Link>
              <Nav.Link as={Link}className='px-4 px-md-2'  to="/Models">Vehicle Models</Nav.Link>
              <Nav.Link as={Link} className='px-4 px-md-2' to="/Testimonials">Testimonials</Nav.Link>
              <Nav.Link as={Link}className='px-4 px-md-2'  to="/Team">Our Team</Nav.Link>
              <Nav.Link as={Link} className='px-4 px-md-2' to="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>      
      </Navbar>
      <Routes>
        <Route exact path="/"       element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/Models"       element={<NavFleet />} />
        <Route path="/Testimonials" element={<NavTestimonials />} />
        <Route path="/Team"         element={<Team />} />
        <Route path="/Contact"      element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}


export default App;
