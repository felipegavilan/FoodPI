import style from '../Paginate/Paginate.module.css'
const Paginate = ({recipesPerPage, recipes, paginate, currentPage, handlerPagPrev, handlerPagNext}) =>{
    const pageNum = [];
    for(let i = 1; i<= Math.ceil(recipes / recipesPerPage); i++){
        pageNum.push(i)
    }
    return (
        <div className={style.paginationContainer}>
        <div className={style.paginate}>
          <button
            onClick={handlerPagPrev}
            disabled={currentPage === 1}
            className={`${style.pageBtn} ${style.prevBtn}`}
          >
            Prev
          </button>
          <p className={style.pageNum}>{`${currentPage} of ${pageNum.length}`}</p>
          <button
            onClick={handlerPagNext}
            disabled={currentPage === pageNum.length}
            className={`${style.pageBtn} ${style.nextBtn}`}
          >
            Next
          </button>
        </div>
      </div>
      
        )
}

export default Paginate