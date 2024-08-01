
import {Outlet} from "react-router-dom";


import Header from './comp/Header/Header'
import './style.css'

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
