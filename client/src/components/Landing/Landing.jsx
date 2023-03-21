import { useNavigate } from 'react-router-dom'
import fondo from '../../fondo/fondo.jpg'
import style from '../Landing/Landing.module.css'

const Landing = () =>{

    const navigate = useNavigate()
    const handlerNavigate = () =>{
        navigate('/home')
    }
    return(
        <div  > 
            <div className={style.container} style={{ backgroundImage: `url(${fondo})` }} >

                <button className={style.button} onClick={handlerNavigate} > RECIPES PAGE </button>
            </div>
        </div>
    )
}

export default Landing