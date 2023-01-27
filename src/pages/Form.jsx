import styles from "./Form.module.css";
import { useState } from "react";
import  puerco from "../assets/cerdo.png"
import  fideo from "../assets/fideos.png"
import  sushi from "../assets/sushi.png"
import {app} from "../pages/firebase"
import { getDatabase, ref,set } from "firebase/database";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const db = getDatabase();

export function Formulario() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const navigate = useNavigate()

  const handleChange = () => {
    setChecked(!checked);
    setChecked2(false)
    setChecked5(false)
  };

  const handleChange2 = () => {
    setChecked2(!checked2);
    setChecked(false)
    setChecked5(false)
  };
  const handleChange3 = () => {
    setChecked3(!checked3);
    setChecked4(false)
  };
  const handleChange4 = () => {
    setChecked4(!checked4);
    setChecked3(false)
  };
  const handleChange5 = () => {
    setChecked5(!checked5);
    setChecked2(false)
    setChecked(false)
  };

  const sendInfo = () =>{
    Swal.showLoading()
    let date = new Date()
    set(ref(db, 'wishes/' + date.toISOString().replace('.','')), {
      cerdo: checked,
      italiana: checked2,
      sushi: checked5,
      almuerzo : checked3,
      cena: checked4
    })
    .then(() => {
      // Data saved successfully!
      Swal.close()
      navigate(`/end`)

    })
    .catch((error) => {
      // The write failed...
    });
  }

  return (
    <div className={styles.div1}>
        <h1 className={styles.title}>Por ser tu dia de tu cumpleaños...</h1>
        <h1 className={styles.title2}>Tienes una cena especial...</h1>
        <h1 className={styles.title}>Elige la imagen que mas te llame la atencion</h1>
      <div className={styles.checkbox}>
        <div className={styles.checrow}>
        <img src={puerco}  alt='pic5' ></img>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            oink!
          </label>
        </div>

        <div className={styles.checrow}>
        <img src={fideo}  alt='pic5'  ></img>
          <label>
            <input
              type="checkbox"
              checked={checked2}
              onChange={handleChange2}
            />
            {"🐶 🐶"}
          </label>
        </div>

        <div className={styles.checrow}>
        <img src={sushi}  alt='pic5'  ></img>
          <label>
            <input
              type="checkbox"
              checked={checked5}
              onChange={handleChange5}
            />
            {"🍱"}
          </label>
        </div>

      </div>

      <div className={styles.checkbox2} >
      <label>Horario: </label>
        <div className={styles.checrow}>
          <label>
            <input
              type="checkbox"
              checked={checked3}
              onChange={handleChange3}
            />
            {" Almuerzo"}
          </label>
        </div>

        <div className={styles.checrow}>
          <label>
            <input
              type="checkbox"
              checked={checked4}
              onChange={handleChange4}
            />
            {"Cena"}
          </label>
        </div>

      </div>

      <div className={styles.bounce} onClick={sendInfo}>
        Enviar informacion :)
      </div>
    </div>
  );
}
