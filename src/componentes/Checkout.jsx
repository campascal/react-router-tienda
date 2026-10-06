import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router'

import { formatearPrecio } from '../datos/productos.js'

export default function Checkout({ carrito }) {

  if (carrito.length === 0) {
    return <Navigate to="/carrito" replace />
  }

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio,
    0
  )

  return (
    <Container className="py-5">

      <h1>Checkout</h1>

      <p>
        Productos en el carrito: {carrito.length}
      </p>

      <p className="fw-bold">
        Total: {formatearPrecio(total)}
      </p>

      <p>
        Pedido listo para continuar con el pago.
      </p>

    </Container>
  )
}