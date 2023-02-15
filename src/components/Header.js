import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
          <Navbar bg="dark" variant="dark">
         <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/RVpTjgZw/spoon-and-fork-restaurant-logo-212966-original.webp"
              width="50"
              height="34"
              className="d-inline-block align-top"
            />{' '}
            Cafe Area
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header