import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import viteLogo from '/vite.svg'

import Header from './comp/Header/Header'
import Lots from './comp/Items/Items'
import './style.css'
import BuyPage from './comp/BuyPage/BuyPage';
import Footer from './comp/Footer/Footer';
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage';
import Thanks from './comp/ThanksPage/ThanksPage';
import Login from './comp/LoginPage/Login';
function App() {
 
  
  //JSON.stringify(localStorage.getItem('access_token')).slice(1, -1).replace(/\W|_/g, '')
  return (
    <div className="App App--ru">
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Lots/>}/>
          <Route path="/item/:id" element={<BuyPage/>}/>
          <Route path="/thanks/" element={<Thanks/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        
      </Router>
    </div>
    
  )
}

export default App
