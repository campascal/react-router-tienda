import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto({ agregarProducto }) {

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

  function agregar() {
    agregarProducto(producto)
    navegar('/carrito')
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

      <div className="d-flex gap-2">

        <Button
          variant="primary"
          onClick={agregar}
          disabled={producto.stock === 0}
        >
          Agregar al carrito
        </Button>

        <Button
          variant="secondary"
          onClick={() => navegar(-1)}
        >
          Volver
        </Button>

      </div>

    </Container>
  )
}