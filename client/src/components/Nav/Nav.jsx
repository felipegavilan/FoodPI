import { useNavigate } from 'react-router-dom'
import style from '../Nav/Nav.module.css'


const Nav = () =>{
    const navigate = useNavigate();
 
    return(
        <div className={style.container}> 
            <div className={style.containerBorder}>
                <button onClick={() => navigate('/home')} className={style.btnImage}></button>
                <button onClick={() => navigate('/home')} className={style.btn}> Home</button>
                <button onClick={() => navigate('/form')} className={style.btn}> Create Recipe</button>
            {/* <div>
                <SearchBar/>
            </div> */}
            </div>
        </div>
    )
}

export default Nav