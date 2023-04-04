import style from "./Form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate  from "./validation";
import { postRecipes } from '../../Redux/Actions/actions'

const Form = () => {
  const [formCreate, setFormCreate] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    image: "",
    steps: [],
    diets: [],
  });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) alert("Please complete form")
   
    else { 
      dispatch(postRecipes(formCreate))
      alert('¡Recipe created successfully!')
    }
  };
  
  const handlerInputChange = (e) => {
    const { name, value } = e.target;
      setFormCreate({
        ...formCreate,
        [name]: value,
      });
      setErrors(
        validate({
          ...formCreate,
          [name]: value,
        })
        );
  };
  //     const handlerDiets = (e) =>{
  //         const { name, checked } = e.target;

  //       const index = formCreate.diets.indexOf(name);
  //       if (checked && index === -1) {
  //         // Agregar el valor seleccionado al array de diets
  //         setFormCreate((formCreate) => ({
  //           ...formCreate,
  //           diets: [...formCreate.diets, name]
  //         }));
  //       } else if (!checked && index !== -1) {
  //         // Eliminar el valor deseleccionado del array de diets
  //         const newDiets = [...formCreate.diets];
  //         newDiets.splice(index, 1);
  //         setFormCreate((formCreate) => ({
  //           ...formCreate,
  //           diets: newDiets
  //         }));
  //     }
  //       else {
  //     // Actualizar otros campos del formulario
  //     setFormCreate((formCreate) => ({
  //       ...formCreate,
  //      diets: [...formCreate, name]
  //     }));

  // }};

  const handlerDiets = (e) => {
    const { name, value, checked } = e.target;
    checked &&
      setFormCreate({
        ...formCreate,
        [name]: [...formCreate.diets, value],
      });
      setErrors(
        validate({
          ...formCreate,
         [name]: [value],
        })
      );
    !checked &&
      setFormCreate({
        ...formCreate,
        [name]: [...formCreate.diets.filter((d) => d !== value)],
      });
      setErrors(
        validate({
          ...formCreate,
         diets: [ value],
        })
      );
  };
  const handlerSteps = (e) => {
    const { name, value } = e.target;
    setFormCreate({
      ...formCreate,
      [name]: [value],
    });
    setErrors(
      validate({
        ...formCreate,
        steps: value,
      })
    );
  };


 
  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="title">Tittle* </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title ..."
            onChange={handlerInputChange}
          />
        {errors.title &&<div className={style.errors}>{errors.title}</div>}
        </div>
        <div>
          <label htmlFor="summary">Summary* </label>
          <input
            id="summary"
            name="summary"
            type="text"
            placeholder="summary ..."
            onChange={handlerInputChange}
          />
        </div>
       {errors.summary && <div className={style.errors}>{errors.summary}</div>}
        <div>
          <label htmlFor="image">URL image* </label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="image ..."
            onChange={handlerInputChange}
          />
        </div>
        {errors.image && <div className={style.errors}>{errors.image}</div>}
        <div>
          <label htmlFor="steps">Steps* </label>
          <textarea
            id="steps"
            name="steps"
            type="text"
            placeholder="steps ..."
            onChange={handlerSteps}
          />
        </div>
        {errors.steps && <div className={style.errors}>{errors.steps}</div>}
        <div >
          <label htmlFor="healthScore">HealthScore* </label>
          <input
            id="healthScore"
            name="healthScore"
            type="number"
            max={100}
            min={0}
            placeholder="healthScore ..."
            onChange={handlerInputChange}
          />
        </div>
        <div className={style.errors}>{errors.healthScore}</div>
        <div className={style.dietsContainer}>
          <div className={style.diets}>
            {diets.map((d) => {
              return (
                <div className={style.inputsDiets} key={d.id}>
                  <p>{d.name}</p>
                  <input
                    name="diets"
                    type="checkbox"
                    value={d.name}
                    onChange={handlerDiets}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {errors.diets && <div className={style.errors}>{errors.diets}</div>}
        <div>
          <button type="submit" disabled={Object.values(errors).length > 0}> Create </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
