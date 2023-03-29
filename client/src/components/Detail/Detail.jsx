import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getId } from '../../Redux/Actions/actions'
import style from './Detail.module.css'

const Detail = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getId(id))
        // eslint-disable-next-line
    },[])
    const recipeId = useSelector(state => state.detail)
    const res = recipeId[0]
    return(
        <div>
            <div className={style.containerDetail} > 
                <div className={style.datos}>
                    <div>{res?.healthScore}</div>
                    <h2>{res?.title}</h2>
                </div>
                <div className={style.summary}>
                <h4>Summary</h4> 
                  <p>{res?.summary} </p>
                </div>
                {res?.steps[0] ? <div className={style.steps}> 
                    <h4>Steps</h4> 
                    <ol>
                        {res.steps?.map((ele, i)=>{
                            return(
                                <li key={i}>
                                    {ele}
                                </li>
                            )
                        })}
                    </ol>
                </div> : null }
                
                <div className={style.img}>
                    {<img src={res?.image} alt='icon'/>}
                </div>
                <div className={style.diets}>
                   <h4>Diets type:</h4> 
                    <ul>
                        {res?.diets.map((ele, i)=>{
                           return(
                            <div className={style.li} key={i}>
                                <li>
                                {ele.name || ele}
                                </li>
                            </div>
                           )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Detail