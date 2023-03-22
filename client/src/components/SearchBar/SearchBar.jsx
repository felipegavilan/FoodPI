import style from '../SearchBar/SearchBar.module.css';
import { getSearch } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import lupa from '../../fondo/lupa.png'


const SearchBar = ({paginate}) =>{

    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    const handlerChange = (e) =>{
        const { value } = e.target;
        setTitle(value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        dispatch(getSearch(title))
       .then(()=>{paginate(1)})
    }


    return(
        <div className={style.container}> 
            <label htmlFor='search' className={style.label} > Search</label>
            <div className={style.input}>
            <input type="text"
             name='search' 
             id='search'
             placeholder='Recipe...'
             className={style.input}
             onChange={(e) => handlerChange(e)}
             />
             </div>
             <div>
                <button onClick={(e) => {handlerSubmit(e)}}>
                {/* <img src={lupa} alt='icon'/>     */}
                🔍
                </button>
             </div>
        </div>
    )
}

export default SearchBar