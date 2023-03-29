import { useNavigate } from 'react-router-dom'
import style from '../Landing/Landing.module.css'

const Landing = () =>{

    const navigate = useNavigate()
    const handlerNavigate = () =>{
        navigate('/home')
    }
    return(
        <div  > 
            <div className={style.container} >

                <button className={style.button} onClick={handlerNavigate} > RECIPES PAGE </button>
            </div>
        </div>
    )
}

export default Landing