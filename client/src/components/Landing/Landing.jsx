import { useNavigate } from "react-router-dom";
import style from "../Landing/Landing.module.css";
import landing from "../../fondo/landing.jpg";
import gorrito from "../../fondo/gorrito.png"

const Landing = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className={style.containerDiv}>
        <div className={style.container}>
          <img src={gorrito} alt="icon" />
          <div className={style.welcome}>
            <h1>WELCOME</h1>
            <h2>TO</h2>
            <h3>THE FOOD APP</h3>
          </div>
          <button className={style.button} onClick={handlerNavigate}>
            LET'S GO!
          </button>
        </div>
        <div className={style.image}>
          <img src={landing} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
