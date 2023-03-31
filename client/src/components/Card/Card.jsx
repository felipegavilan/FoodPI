import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({id, title, image, diets}) =>{
    
    return(
        <div className={style.cardContainer} key={id}>
            <div  className={style.card}>
                <Link to={`/detail/${id}`}> 
                    <div className={style.name}>
                        <h2>{title}</h2>
                    </div>
                    <div className={style.image}>
                        <img src={image} alt='icon'/>
                    </div>
                </Link>
                <div className={style.diets}> 
                    {diets?.map((ele, i)=>{
                        return(
                            <div key={i}>
                                {ele.name || ele}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Card