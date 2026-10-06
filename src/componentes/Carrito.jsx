import { Button, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router'

import { formatearPrecio } from '../datos/productos.js'

export default function Carrito({ carrito, quitarProducto }) {

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio,
    0
  )

  return (
    <Container className="py-4">

      <h1 className="mb-4">Carrito</h1>

      {carrito.length === 0 ? (

        <p>Tu carrito está vacío.</p>

      ) : (

        <>
          <ListGroup className="mb-4">

            {carrito.map((producto, indice) => (

              <ListGroup.Item
                key={`${producto.id}-${indice}`}
                className="d-flex justify-content-between align-items-center"
              >

                <span>
                  {producto.emoji} {producto.nombre}
                </span>

                <div>
                  <span className="me-3">
                    {formatearPrecio(producto.precio)}
                  </span>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => quitarProducto(indice)}
                  >
                    Quitar
                  </Button>
                </div>

              </ListGroup.Item>

            ))}

          </ListGroup>

          <h4>
            Total: {formatearPrecio(total)}
          </h4>

          <Button
            as={Link}
            to="/checkout"
            className="mt-3"
          >
            Ir al checkout
          </Button>
        </>

      )}

    </Container>
  )
}