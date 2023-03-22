import { useNavigate } from 'react-router-dom'
import style from '../Nav/Nav.module.css'
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/Actions/actions';

const Nav = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlerHome = () =>{
        dispatch(getRecipes())
    }
    return(
        <div className={style.container}> 
            <div className={style.containerBorder}>
                <button onClick={() => navigate('/home')} className={style.btnImage}></button>
                <button onClick={handlerHome} className={style.btn}> Home</button>
                <button onClick={() => navigate('/form')} className={style.btn}> Create Recipe</button>
            {/* <div>
                <SearchBar/>
            </div> */}
            </div>
        </div>
    )
}

export default Nav