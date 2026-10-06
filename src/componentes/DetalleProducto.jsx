import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto() {

  const { id } = useParams()
  const navegar = useNavigate()

  const producto = buscarProducto(id)

  if (!producto) {
    return (
      <Container className="py-5">

        <h1>Producto no encontrado</h1>

        <p>
          No existe un producto con el identificador {id}.
        </p>

        <Button onClick={() => navegar(-1)}>
          Volver
        </Button>

      </Container>
    )
  }

  return (
    <Container className="py-5">

      <div className="fs-1 mb-3" aria-hidden="true">
        {producto.emoji}
      </div>

      <h1>{producto.nombre}</h1>

      <p className="text-capitalize">
        {producto.categoria}
      </p>

      <p>
        {producto.descripcion}
      </p>

      <p className="fw-bold">
        {formatearPrecio(producto.precio)}
      </p>

      <p>
        Stock: {producto.stock}
      </p>

      <Button
        variant="secondary"
        onClick={() => navegar(-1)}
      >
        Volver
      </Button>

    </Container>
  )
}