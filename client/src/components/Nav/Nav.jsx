import { useNavigate, useLocation } from "react-router-dom";
import style from "../Nav/Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation()



  return (
    <div className={style.container}>
      <div className={style.containerBorder}>
        <button
          onClick={() => navigate('/home')}
          className={style.btnImage}
        ></button>
        <button onClick={() => navigate('/home')} className={location.pathname === '/home' ? style.btnActive :style.btn}>
          <svg
            width="46"
            height="46"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.512.23a.75.75 0 0 1 .976 0l11.462 9.825V21.6a2.35 2.35 0 0 1-2.35 2.35h-6.4a.75.75 0 0 1-.75-.75v-4.8a2.45 2.45 0 0 0-4.9 0v4.8a.75.75 0 0 1-.75.75H2.4A2.35 2.35 0 0 1 .05 21.6V10.055L11.512.231ZM1.55 10.746V21.6c0 .47.38.85.85.85h5.65V18.4a3.95 3.95 0 0 1 7.9 0v4.05h5.65c.47 0 .85-.38.85-.85V10.745L12 1.788 1.55 10.745Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button onClick={() => navigate('/form')} className={location.pathname === '/form' ? style.btnActive :style.btn}>
          Create Recipe
        </button>
      </div>
    </div>
  );
};

export default Nav;
