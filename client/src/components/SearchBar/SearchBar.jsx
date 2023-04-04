import style from "../SearchBar/SearchBar.module.css";
import { getSearch } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import lupa from '../../fondo/lupa.png'

const SearchBar = ({ paginate }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert("Sorry, write a recipe please")
    } else{

      dispatch(getSearch(title)).then(() => {
      paginate(1);
      });
    }
  };

  return (
    <div className={style.container} style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className={style.input}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Recipe..."
        className={style.input}
        onChange={(e) => handlerChange(e)}
        
      />
    </div>
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={(e) => {
        handlerSubmit(e);
      }}
    >
      <path d="m8 16 2.879-2.879m0 0a3 3 0 1 0 4.278-4.208 3 3 0 0 0-4.278 4.208ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
    </svg>
  </div>
  
  );
};

export default SearchBar;
