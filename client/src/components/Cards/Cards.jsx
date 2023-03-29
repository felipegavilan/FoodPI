import Card from '../Card/Card'
import style from './Cards.module.css'
const Cards = ({currentRecipes}) =>{
    return(
        <div className={style.container}>
        {
            currentRecipes.map(r => {
                return(
                    <div key={r.id} className={style.card} >
                        <Card
                        id={r.id}
                        title={r.title}
                        image={r.image}
                        diets={r.diets}
                        />
                    </div>
                    
                )
            })
        }
        </div>
    )
}

export default Cards