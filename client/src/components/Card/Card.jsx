import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addFavorite, deleteFav } from '../../Redux/Actions/actions'


const Card = ({id, title, image, diets}) =>{
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const [isFav, setIsFav] = useState(false)

    const handlerFavorite = () =>{
        if(isFav){
            setIsFav(false);
            dispatch(deleteFav(id))
        }
        else{
            setIsFav(true)
            dispatch(addFavorite(id))
            
        }
    }
    
    useEffect(()=>{
        favorites?.forEach((fav) => {
            if(fav[0].id === id){
                setIsFav(true)
            }
        })
    },[favorites, id])

    return(
        <div className={style.cardContainer} key={id}>
            <div  className={style.card}>
            {
            isFav ? (
               <button className={style.btnFav} onClick={handlerFavorite}>❤️</button>
            ) : (
               <button className={style.btnFav} onClick={handlerFavorite}>🤍</button>
            )
            }    
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