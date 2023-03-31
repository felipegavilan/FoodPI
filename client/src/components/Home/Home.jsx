import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  getDiets,
  filterByName,
  filterByDiets,
  filterHealthScore,
  filterApiOrBdd,
} from "../../Redux/Actions/actions";
import Paginate from "../Paginate/Paginate";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getDiets())
    dispatch(getRecipes())
    // eslint-disable-next-line 
  }, []);


  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 9;
  const firstRecipes = (currentPage - 1) * recipesPerPage;
  const lastRecipes = firstRecipes + recipesPerPage;
  const currentRecipes = recipes.slice(firstRecipes, lastRecipes);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const handlerPagPrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handlerPagNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlerClick = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "orderAlph":
        return dispatch(filterByName(value));
      case "diets":
        return dispatch(filterByDiets(value));
      case "score":
        return dispatch(filterHealthScore(value));
      case "apiBdd":
        return dispatch(filterApiOrBdd(value));
      default:
        return null;
    }
  };
  const handlerBack = (e) =>{
    const {value} = e.target
      dispatch(filterByDiets(value))
  }
  return (
    <div className={style.container}>
        <div className={style.btn}>
        <button value="all" onClick={(e) => handlerBack(e)} >Back</button>
        </div>
      <div className={style.searchBar}>
        <SearchBar paginate={paginate} />
      </div>
      <div className={style.containerFilter}>
        <div className={style.containerOrderDiets}>
          <select name="diets" onChange={handlerClick}>
            <option disabled>Diets</option>
            <option value="all">All</option>
            {diets &&
              diets.map((d) => (
                <option value={d.name} key={d.id}>
                  {d.name}
                </option>
              ))}
          </select>
        </div>
        <div className={style.orderAlph}>
          <select name="orderAlph" onChange={handlerClick}>
            <option disabled>Alphabetical order</option>
            <option value="asc">Asc A-Z</option>
            <option value="desc">Desc Z-A</option>
          </select>
        </div>
        <div className={style.orderApiBdd} onChange={handlerClick}>
          <select name="apiBdd">
            <option disabled>Silter API or DB</option>
            <option value="api">Api</option>
            <option value="bdd">Bdd</option>
          </select>
        </div>
        <div className={style.healthScore}>
          <select name="score" onChange={handlerClick}>
            <option disabled>Health Score</option>
            <option value="up">Upward</option>
            <option value="down">Falling</option>
          </select>
        </div>
      </div>
      <div className={style.paginate}>
        <Paginate
          recipesPerPage={recipesPerPage}
          recipes={recipes?.length}
          paginate={paginate}
          currentPage={currentPage}
          handlerPagPrev={handlerPagPrev}
          handlerPagNext={handlerPagNext}
        />
        <Cards currentRecipes={currentRecipes} />
        <Paginate
          recipesPerPage={recipesPerPage}
          recipes={recipes?.length}
          paginate={paginate}
          currentPage={currentPage}
          handlerPagPrev={handlerPagPrev}
          handlerPagNext={handlerPagNext}
        />
      </div>
   
    </div>
  );
};

export default Home;
