import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navbar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Ben</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/notepad'>Notepad</Nav.Link>
            <Nav.Link href='/search'>Search</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
