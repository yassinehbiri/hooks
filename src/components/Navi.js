import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navi() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#features">Movies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
  );
}
export default Navi