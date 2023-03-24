import style from './Form.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validate } from './validation'

const Form = () =>{
    const [formCreate, setFormCreate] = useState({
        title:'' ,
        summary:'' ,
        healthScore:'' ,
        image:'',
        steps: [],
        diets:[],
    })
    const [errors, setErrors] = useState({
        title:'' ,
        summary:'' ,
        image:'',
        healthScore:0 ,
        steps: [],
        diets:[],
    })
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)


    const handlerSubmit = (e) =>{
        e.preventDefault()
    }
    const handlerInputChange = (e) =>{
        const { name, value } = e.target;
        setFormCreate({
            ...formCreate,
            [name] : value
        })
        setErrors(validate({
            ...formCreate,
            [name] : value
        }))

    }
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
        
    const handlerDiets = (e) =>{
        const { name, value, checked } = e.target
        checked && setFormCreate({
            ...formCreate,
            [name] : [...formCreate.diets, value]
        }) 
        !checked && setFormCreate({
            ...formCreate,
            [name]: [...formCreate.diets.filter(d => d !== value)]
        })
       setErrors(validate({
            ...formCreate,
            [name] : [...formCreate.diets, value]
        })) 

    }
    const handlerSteps = (e) =>{
        const { name, value } = e.target
        setFormCreate({
            ...formCreate,
            [name] : [value]
        }) 
        setErrors(validate({
            ...formCreate,
            [name] : [value]
        })) 
    }
    return(
        <div> 
            <form onSubmit={handlerSubmit}>
            <div className={style.container}>
                <label htmlFor="title">Tittle   </label>
                <input 
                id="title"
                name="title"
                type="text"
                placeholder="title ..."
                onChange={handlerInputChange}
                />
            </div>
            <div>
                <label htmlFor="summary">Summary   </label>
                <input 
                id="summary"
                name="summary"
                type="text"
                placeholder="summary ..."
                onChange={handlerInputChange}
                />
            </div>
            <div>
                <label htmlFor="image">URL image   </label>
                <input 
                id="image"
                name="image"
                type="text"
                placeholder="image ..."
                onChange={handlerInputChange}
                />
            </div>
            <div>
                <label htmlFor="steps">Steps   </label>
                <textarea 
                id="steps"
                name="steps"
                type=""
                placeholder="steps ..."
                onChange={(e) => handlerSteps(e)}
                />
            </div>
            <div>
                <label htmlFor="healthScore">HealthScore   </label>
                <input 
                id="healthScore"
                name="healthScore"
                type="number"
                placeholder="healthScore ..."
                onChange={handlerInputChange}
                />
            </div>
            <div className={style.dietsContainer}>
                <div className={style.diets}>
                    {diets.map((d)=> {
                           return <div className={style.inputsDiets}>
                            <p>{d.name}</p>
                            <input
                            name= 'diets'
                            type="checkbox" 
                            value={d.name}
                            onChange={handlerDiets}
                            />
                            </div>
                        
                    })}
                </div>
            </div>
            <div>
                <button type='submit'> Create </button>
            </div>
            </form>
        </div>
    )
}

export default Form