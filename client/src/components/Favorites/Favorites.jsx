import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

const Favorites = () => {
  const favoritesRecipe = useSelector((state) => state.favorites);
  return (
    <div className={style.container}>
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
    </div>
  );
};

export default Favorites;
