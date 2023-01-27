import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Presentacion } from "./pages/Presentacion";
import { Formulario } from "./pages/Form";
import { End } from "./pages/End";
export function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/presentacion" element={<Presentacion/>} />
          <Route path="/formulario" element={<Formulario/>} />
          <Route path="/end" element={<End/>} />
        </Routes>
      </main>
    </Router>
  );
}
