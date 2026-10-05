import Cabezera from "./Cabezera"
import { Container } from "react-bootstrap"

function Inicio(){
    return(
    <>
    <Cabezera/>
    <div className="d-flex flex-column min-vh-100">
      
      <main>
        <h1>Inicio</h1>

      </main>

      <footer className="bg-dark text-white-50 py-3">
        <Container>&copy; 2026 Lo quieres, te lo vendo — Equipo 1</Container>
      </footer>
    </div>
    </>
    )
}

export default Inicio