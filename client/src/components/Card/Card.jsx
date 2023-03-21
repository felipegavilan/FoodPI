import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({id, title, image, diets}) =>{

    return(
        <div className={style.cardContainer}>
            <div key={id} className={style.card}>
                <Link to={`/detail/${id}`}> 
                    <div className={style.name}>
                        <h2>{title}</h2>
                    </div>
                    <div className={style.image}>
                        <img src={image} alt='icon'/>
                    </div>
                </Link>
                <div className={style.diets}> 
                    <h2>{diets}</h2>
                </div>
            </div>

        </div>
    )
}

export default Card