import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Power } from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();

  return <Navbar className="MainNav px-3 mb-4" bg="light" expand="lg">
    <Navbar.Brand>
      <Link to="/" style={{
        color: 'initial',
        textDecoration: 'none'
      }}>Valgroup</Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Nav className="ms-auto">
        <Nav.Link href="#link">
          <Power size={20} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default MainNav;