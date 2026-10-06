import { Link, useLocation } from 'react-router'

export default function NoEncontrado() {

  const ubicacion = useLocation()

  return (
    <div className="container py-5 text-center">

      <h1>404</h1>

      <p>La página que buscas no existe.</p>

      <p className="text-muted">
        Ruta: {ubicacion.pathname}
      </p>

      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>

    </div>
  )
}