
import Cards from '../Cards/Cards'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getRecipes, getDiets, filterByName, filterByDiets, filterHealthScore, filterApiOrBdd} from '../../Redux/Actions/actions'
import Paginate from '../Paginate/Paginate';
import style from './Home.module.css'
import SearchBar from '../SearchBar/SearchBar';


const Home = () =>{
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getRecipes())
        // eslint-disable-next-line
    },[])

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
   
    const handlerClick = (e) =>{
        const {name, value} = e.target;

        switch(name){
            case 'orderAlph':
                return dispatch(filterByName(value))
            case 'diets':
                if(value === 'all'){
                    dispatch(getRecipes())
                } 
                    return dispatch(filterByDiets(value))
            case 'score':
                return dispatch(filterHealthScore(value))
            case 'apiBdd':
                return dispatch(filterApiOrBdd(value))
                default: return null
        }
    }
    


    return(
        <div>

            <div className={style.searchBar}>
                <SearchBar paginate={paginate}/>
            </div>
            <div className={style.containerFilter}>
                <div className={style.containerOrderDiets}>
                    
                <select  name='diets' onChange={handlerClick} >
                        <option  disabled >Diets</option>
                        <option  value='all' >All</option>
                        {
                            diets && diets.map(d => (
                                <option value={d.name} key={d.id}>{d.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.orderAlph}>
                    <select name='orderAlph' onChange={handlerClick} >
                        <option  disabled >Select Order Alph</option>
                        <option value='asc'>A-z</option>
                        <option value='desc'>Z-a</option>
                    </select>
                </div>
                <div className={style.orderApiBdd} onChange={handlerClick}>
                    <select name='apiBdd'>
                        <option  disabled >Select filter Api or Bdd</option>
                        <option value="api">Api</option>
                        <option value="bdd">Bdd</option>
                    </select>
                </div>
                <div className={style.healthScore}>
                    <select name='score' onChange={handlerClick}>
                        <option  disabled >Health Score</option>
                        <option value='up'>Upward</option>
                        <option value='down'>Falling</option>
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