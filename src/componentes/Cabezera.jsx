import { Nav,Navbar,Container } from "react-bootstrap"

function Cabezera(){

    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">Lo quieres, te lo vendo</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => setVista('catalogo')}>Catálogo</Nav.Link>
              <Nav.Link onClick={() => setVista('nosotros')}>Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Cabezera