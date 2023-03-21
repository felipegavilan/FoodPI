
import Cards from '../Cards/Cards'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getRecipes, getDiets} from '../../Redux/Actions/actions'
import Paginate from '../Paginate/Paginate';

const Home = () =>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state=>state.diets)

    const [currentPage, setCurrentPage] = useState(1);
    
    const recipesPerPage = 9;
    const firstRecipes = (currentPage - 1) * recipesPerPage;
    const lastRecipes= firstRecipes + recipesPerPage;
    const currentRecipes = recipes.slice(firstRecipes, lastRecipes )
    

    const paginate = number =>{
        setCurrentPage(number)
    }

    return(
        <div>
            <div>
            <select  defaultValue='default' >
                    <option value="default" disabled >Select by diet type</option>
                    {
                        diets && diets.map(d => (
                            <option value={d.name} key={d.id}>{d.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <Paginate
                recipesPerPage={recipesPerPage}
                recipes={recipes?.length}
                paginate={paginate}
                currentPage={currentPage}
                />
            </div>
            <div>
                <Cards currentRecipes={currentRecipes}/>
            </div>
        </div>
    )
}

export default Home