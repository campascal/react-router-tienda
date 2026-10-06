import { Route, Routes } from 'react-router'

import Layout from './componentes/Layout.jsx'
import Inicio from './componentes/Inicio.jsx'
import Catalogo from './componentes/Catalogo.jsx'
import Contacto from './componentes/Contacto.jsx'
import Nosotros from './componentes/Nosotros.jsx'
import DetalleProducto from './componentes/DetalleProducto.jsx'
import NoEncontrado from './componentes/NoEncontrado.jsx'

export default function App() {

  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Inicio />} />

        <Route
          path="/catalogo"
          element={<Catalogo />}
        />

        <Route
          path="/producto/:id"
          element={<DetalleProducto />}
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