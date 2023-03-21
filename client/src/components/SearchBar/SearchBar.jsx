import style from '../SearchBar/SearchBar.module.css'
const SearchBar = () =>{

    return(
        <div className={style.container}> 
            <label htmlFor='search' className={style.label} > Search</label>
            <div className={style.input}>
            <input type="text"
             name='search' 
             id='search'
             placeholder='Recipe...'
             className={style.input}
             />
             </div>
        </div>
    )
}

export default SearchBar