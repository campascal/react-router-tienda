import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'

function Cabezera() {

  const [abierta, setAbierta] = useState(false)

  const cerrar = () => setAbierta(false)

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      expanded={abierta}
      onToggle={setAbierta}
    >
      <Container>

        <Navbar.Brand href="#">
          Lo quieres, te lo vendo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">

          <Nav className="ms-auto">

            <Nav.Link as={NavLink} to="/" onClick={cerrar}>
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/nosotros" onClick={cerrar}>
              Nosotros
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto" onClick={cerrar}>
              Contacto
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Cabezera