import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import Layout from './componentes/Layout.jsx'
import Inicio from './componentes/Inicio.jsx'
import Catalogo from './componentes/Catalogo.jsx'
import Contacto from './componentes/Contacto.jsx'
import Nosotros from './componentes/Nosotros.jsx'
import DetalleProducto from './componentes/DetalleProducto.jsx'
import NoEncontrado from './componentes/NoEncontrado.jsx'
import Carrito from './componentes/Carrito.jsx'
import Checkout from './componentes/Checkout.jsx'

function leerCarritoGuardado() {
  try {

    const guardado = localStorage.getItem('lqtlv-carrito')

    return guardado
      ? JSON.parse(guardado)
      : []

  } catch {

    return []

  }
}

export default function App() {

  const [carrito, setCarrito] = useState(leerCarritoGuardado)

  useEffect(() => {

    localStorage.setItem(
      'lqtlv-carrito',
      JSON.stringify(carrito)
    )

  }, [carrito])

  function agregarProducto(producto) {

    setCarrito((actual) => [
      ...actual,
      producto
    ])

  }

  function quitarProducto(indice) {

    setCarrito((actual) =>
      actual.filter((_, i) => i !== indice)
    )

  }

  return (
    <Routes>

      <Route
        element={
          <Layout cantidadCarrito={carrito.length} />
        }
      >

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/catalogo"
          element={<Catalogo />}
        />

        <Route
          path="/producto/:id"
          element={
            <DetalleProducto
              agregarProducto={agregarProducto}
            />
          }
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              quitarProducto={quitarProducto}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout carrito={carrito} />
          }
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/nosotros"
          element={<Nosotros />}
        />

        <Route
          path="*"
          element={<NoEncontrado />}
        />

      </Route>

    </Routes>
  )
}