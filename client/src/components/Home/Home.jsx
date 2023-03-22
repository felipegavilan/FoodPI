
import Cards from '../Cards/Cards'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getRecipes, getDiets} from '../../Redux/Actions/actions'
import Paginate from '../Paginate/Paginate';
import style from './Home.module.css'
import SearchBar from '../SearchBar/SearchBar';


const Home = () =>{
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getRecipes())
        // eslint-disable-next-line
    },[dispatch])

    useEffect(()=>{
        dispatch(getDiets())
        // eslint-disable-next-line
    },[])

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

            <div className={style.searchBar}>
                <SearchBar paginate={paginate}/>
            </div>
            <div className={style.containerFilter}>
                <div className={style.containerOrderDiets}>
                    
                <select  defaultValue='Diets' >
                        <option  disabled >Select by diet type</option>
                        {
                            diets && diets.map(d => (
                                <option value={d.name} key={d.id}>{d.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.orderAlph}>
                    <select  defaultValue='Alph'>
                        <option  disabled >Select Order</option>
                        <option value='Up'>Upward</option>
                        <option value='Down'>Falling</option>
                    </select>
                </div>
                <div className={style.orderApiBdd}>
                    <select defaultValue='ApiBdd'>
                        <option  disabled >Select filter Api or Bdd</option>
                        <option value="Api">Api</option>
                        <option value="Bdd">Bdd</option>
                    </select>
                </div>
                <div className={style.healthScore}>
                    <select defaultValue='score'>
                        <option  disabled >Health Score</option>
                        <option value='asc'>Upward</option>
                        <option value='desc'>Falling</option>
                    </select>
                </div>
            </div>
            <div className={style.paginate}>
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