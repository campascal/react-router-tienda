import { Container, Row, Col } from 'react-bootstrap'
import { productos } from '../datos/productos.js'
import TarjetaProducto from './TarjetaProducto.jsx'

export default function Catalogo() {
  return (
    <Container className="py-4">

      <h1 className="mb-4">Catálogo</h1>

      <Row xs={1} sm={2} lg={3} className="g-3">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <TarjetaProducto producto={producto} />
          </Col>
        ))}
      </Row>

    </Container>
  )
}