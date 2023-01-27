import styles from "./LandingPage.module.css";
import {
  Link
} from "react-router-dom";
export function LandingPage() {

  return (
    <div>
      <h1 className={styles.title}>Feliz Cumpleaños 25</h1>
      <Link to="/presentacion">
      <div className={styles.bounce}>
          Click para continuar
      </div>
      </Link>
      
    </div>
  );
}
