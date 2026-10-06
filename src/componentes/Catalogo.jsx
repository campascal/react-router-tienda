import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router'

import { productos, categorias } from '../datos/productos.js'
import TarjetaProducto from './TarjetaProducto.jsx'

export default function Catalogo() {

  const [parametros, setParametros] = useSearchParams()

  const texto = parametros.get('buscar') ?? ''
  const categoria = parametros.get('categoria') ?? ''

  function actualizar(clave, valor) {
    const copia = new URLSearchParams(parametros)

    if (valor) {
      copia.set(clave, valor)
    } else {
      copia.delete(clave)
    }

    setParametros(copia)
  }

  const visibles = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(texto.toLowerCase()) &&
      (categoria === '' || producto.categoria === categoria)
  )

  return (
    <Container className="py-4">

      <h1 className="mb-4">Catálogo</h1>

      <Row className="g-2 mb-4">

        <Col xs={12} md={8}>
          <Form.Control
            type="search"
            placeholder="Buscar producto..."
            value={texto}
            onChange={(e) => actualizar('buscar', e.target.value)}
          />
        </Col>

        <Col xs={12} md={4}>
          <Form.Select
            value={categoria}
            onChange={(e) => actualizar('categoria', e.target.value)}
          >
            <option value="">Todas las categorías</option>

            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}

          </Form.Select>
        </Col>

      </Row>

      {visibles.length === 0 ? (

        <Alert variant="warning">
          Sin resultados.
        </Alert>

      ) : (

        <Row xs={1} sm={2} lg={3} className="g-3">

          {visibles.map((producto) => (
            <Col key={producto.id}>
              <TarjetaProducto producto={producto} />
            </Col>
          ))}

        </Row>

      )}

    </Container>
  )
}