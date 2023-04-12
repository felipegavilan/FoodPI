import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import  addFavorite from "../../fondo/addFavorites.webp";
const Favorites = () => {
  const favoritesRecipe = useSelector((state) => state.favorites);
  return (
    <div>
      {favoritesRecipe.length >= 1  ? <div className={style.container}>
          {favoritesRecipe?.map((recipe) => {
            const c = recipe[0];
            return (
              <div key={c.id} className={style.card}>
                <Card
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  diets={c.diets?.map((ele, i) => {
                    return <div key={i}>{ele.name || ele}</div>;
                  })}
                />
              </div>
            );
          })}
        </div> : <div>
          <div className={style.addFavorite}>
            <p>Add your favorite recipes</p>
            <img src={addFavorite} alt="icon" />
          </div>
          </div>}
        
    </div>
  );
};

export default Favorites;
