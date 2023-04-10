import './App.css';
import { Routes, Route, useLocation  } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import Favorites from './components/Favorites/Favorites';
import axios from 'axios'

axios.defaults.baseURL= 'https://foodpi-production-726b.up.railway.app/';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/'? <Nav/> : null }
      <div>
          <Routes>
            <Route path='/' element={ <Landing/> } />
            <Route path='/home' element={ <Home /> }/>
            <Route path='/detail/:id' element={ <Detail /> } />
            <Route path='/form' element={ <Form /> } />
            <Route path='/favorites' element={<Favorites/>} />
          </Routes>
      </div>
          
    </div>
  );
}

export default App;
