
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";


import Header from './comp/Header/Header'
import Lots from './comp/Items/Items'
import './style.css'
import BuyPage from './comp/BuyPage/BuyPage';

import Thanks from './comp/ThanksPage/ThanksPage';
import Login from './comp/LoginPage/Login';
function App() {
 
  
  //JSON.stringify(localStorage.getItem('access_token')).slice(1, -1).replace(/\W|_/g, '')
  return (
    <div className="App App--ru">
        <Header/>
        <Outlet/>
      
    </div>
    
  )
}

export default App
