import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router'
import Cabezera from './Cabezera.jsx'

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Cabezera />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-dark text-white-50 py-3">
        <Container>
          &copy; 2026 Lo quieres, te lo vendo — Equipo 1
        </Container>
      </footer>

    </div>
  )
}