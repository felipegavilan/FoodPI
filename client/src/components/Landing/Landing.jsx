import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDiets, getRecipes } from "../../Redux/Actions/actions";
import style from "../Landing/Landing.module.css";
import landing from "../../fondo/landing.webp";
import gorrito from "../../fondo/gorrito.webp"

const Landing = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate("/home");
  };
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getDiets())
    dispatch(getRecipes())
    // eslint-disable-next-line 
  }, []);
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
