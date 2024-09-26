// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; 

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/" className="logo">
         
          <svg width="54" height="19" viewBox="0 0 64 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.5518 0.735999C40.0078 0.735999 42.6798 1.776 44.5678 3.856C46.4878 5.936 47.4478 8.752 47.4478 12.304V28H36.8398V13.648C36.8398 12.496 36.4878 11.6 35.7838 10.96C35.1118 10.288 34.1998 9.952 33.0478 9.952C31.8638 9.952 30.9358 10.288 30.2638 10.96C29.5918 11.6 29.2558 12.496 29.2558 13.648V28H18.6478V13.648C18.6478 12.496 18.2958 11.6 17.5918 10.96C16.9198 10.288 16.0078 9.952 14.8558 9.952C13.6718 9.952 12.7438 10.288 12.0718 10.96C11.3998 11.6 11.0638 12.496 11.0638 13.648V28H0.407813V0.927999H11.0638V4.576C11.8318 3.424 12.8718 2.496 14.1838 1.792C15.5278 1.088 17.0958 0.735999 18.8878 0.735999C20.8398 0.735999 22.5678 1.168 24.0718 2.032C25.5758 2.864 26.7758 4.048 27.6718 5.584C28.6638 4.176 29.9278 3.024 31.4638 2.128C32.9998 1.2 34.6958 0.735999 36.5518 0.735999ZM57.3441 28.384C55.4881 28.384 54.0001 27.888 52.8801 26.896C51.7601 25.904 51.2001 24.656 51.2001 23.152C51.2001 21.616 51.7601 20.352 52.8801 19.36C54.0001 18.336 55.4881 17.824 57.3441 17.824C59.1681 17.824 60.6401 18.336 61.7601 19.36C62.8801 20.352 63.4401 21.616 63.4401 23.152C63.4401 24.656 62.8801 25.904 61.7601 26.896C60.6401 27.888 59.1681 28.384 57.3441 28.384Z" fill="black"/>
</svg>
       </Navbar.Brand>

      
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-tab">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-tab">Shop</Nav.Link>
            <Nav.Link href="#pricing" className="nav-tab">About user</Nav.Link>
            <Nav.Link href="#about" className="nav-tab">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      
        <div className="navbar-icons d-flex">
          <a href="#user" className="icon">
            <i className="fas fa-user"></i>
          </a>
          <a href="#cart" className="icon">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="#search" className="icon">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
