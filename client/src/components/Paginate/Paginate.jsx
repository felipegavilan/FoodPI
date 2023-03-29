import style from '../Paginate/Paginate.module.css'
const Paginate = ({recipesPerPage, recipes, paginate, currentPage}) =>{
    const pageNum = [];
    for(let i = 1; i<= Math.ceil(recipes / recipesPerPage); i++){
        pageNum.push(i)
    }
    return (
        <div>
            <div className={style.paginate}>
                <ul>
                    {pageNum && pageNum.map(num => {
                        return(
                            <div key={num} >
                                <li>
                                    <button key={num} 
                                    onClick={()=>paginate(num)}>
                                        {num}
                                    </button>
            
                                </li>
                            </div>
                            ) 
                           
                        
                        })}
                </ul>
            </div>
        </div>
        )
}

export default Paginate