
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Header from './comp/Header/Header'
import Lots from './comp/Items/Items'
import './style.css'
import BuyPage from './comp/BuyPage/BuyPage';

import Thanks from './comp/ThanksPage/ThanksPage';
import Login from './comp/LoginPage/Login';
function App() {
 
    const [_access_token, setToken] = useLocalStorage('access_token','')
    const [_refresh_token, setRefresh] = useLocalStorage('refresh_token','')
    
    if(location.search.substr(1).slice(5).length != 0)
      useEffect(()=>{
        axios.post('https://api.openspm.store/api/auth','',
          {headers:{'code':location.search.substr(1).slice(5)}}
        ).then((response)=>{setToken(response.data['access_token']);setRefresh(response.data['refresh_token']);location.replace('https://openspm.store/')})},[])
  //JSON.stringify(localStorage.getItem('access_token')).slice(1, -1).replace(/\W|_/g, '')
  return (
    <div className="App App--ru">
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Lots/>}/>
          <Route path="/item/:id" element={<BuyPage/>}/>
          <Route path="/thanks/" element={<Thanks/>}/>
        </Routes>
        
      </Router>
    </div>
    
  )
}

export default App
