import styles from "./Presentacion.module.css";
import  pic1 from "../assets/pic1.png"
import  pic2 from "../assets/pic2.png"
import  pic3 from "../assets/pic3.png"
import  pic4 from "../assets/pic4.png"
import  pic5 from "../assets/pic5.png"
import  pic6 from "../assets/pic6.png"
import  pic7 from "../assets/pic7.png"
import  pic8 from "../assets/pic8.png"
import  pic9 from "../assets/pic9.png"
import  pic10 from "../assets/pic10.png"

import useSound from 'use-sound';
import  music from "../assets/music.mp3"
import {
  Link
} from "react-router-dom";
export function Presentacion() {
  const [play] = useSound(music);
  play();
  const texto = "Desde el día que te conocí no has dejado de sorprenderme ni uno solo, de demostrarme que tu esencia, entre muchas, es única; y de lo afortunado que soy por tenerte cerca mio. Te has adentrado en mi vida poco a poco a tal punto de sentirme incompleto cuando no sé nada sobre ti. Siempre que te veo, veo a un hombre excepcional lleno de virtudes y de dudas también, tu camino no ha sido fácil, sin embargo nunca te he visto rendirte y por eso te admiro y respeto tanto. Me alegra pensar que me has permitido encontrar en ti esa pizca de sensatez cuando siento que todo se cae hacia atrás, que si te tengo cerca todo se me olvida y me siento en paz. Aunque suene cliché, las palabras y yo nunca nos hemos llevado bien, por lo que mis sentimientos no siempre puedo expresarlos como los siento en mi ❤ ️, junto a ti he aprendido mucho sobre querer. Hoy el día de tu cumpleaños deseo con mucha intensidad que lo que estés soñando se haga realidad, que tus preocupaciones desaparezcan y podamos celebrar lo milagroso que es vivir. "
  
  return (

    <div className={styles.container}>
	   <div className={styles.column}>
       <img src={pic5}  alt='pic5' className={styles.img1} ></img>
       <img src={pic6} alt='pic6' className={styles.img1}></img>
       <img src={pic4}  alt='pic4'className={styles.img1}></img>
	   </div>
     <div className={styles.column2}>
      <div>
        <img src={pic3} alt='pic3' className={styles.img2} ></img>
        <img src={pic1} alt='pic1' className={styles.img5} ></img>
        <img src={pic2} alt='pic2' className={styles.img5} ></img>
        <img src={pic10} alt='pic10' className={styles.img5} ></img>
      </div>
      <div className={styles.textc} >
      <h2> Samir rojas </h2>
		    <p> {texto}</p>
        <p> Te quiero con todo mi ❤ ️ </p>
      
      </div>
      <Link to="/formulario">
      <div className={styles.bounce}>
          Click para continuar
      </div>
      </Link>
	     
	   </div>
	   <div className={styles.column}>
       <img src={pic8} alt='pic8' className={styles.img3} ></img>
       <img src={pic9} alt='pic9' className={styles.img4} ></img>
       <img src={pic7} alt='pic7' className={styles.img4} ></img>
	   </div>
	</div>
  );
}
