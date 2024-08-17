import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route , RouterProvider, Link, useNavigate } from 'react-router-dom' 

import Navbar from './components/NavBar'
import HomePage from './pages/Home'
import WatchList from './pages/Watchlist'
import ErrorPage from './pages/ErrorPage'
import OperationsPage from './pages/Operations'
import ProfilePage from './pages/Profile'

function App() {

  const [active,setActive] = useState(0);
  const buttons = ["Home","Watchlist", "Operations"];


  const NavComponent = ({children}) =>{
    return (
      <>
        <Navbar active={active} setActive={setActive} buttons={buttons} />
        {children}
      </>
    )
  }
  
  const [activeComponent, setActiveComponent] = useState(HomePage);

  useEffect( () => {
    console.log('active ', active );
  
    switch(active){
      case 0:
        setActiveComponent(HomePage);
        break;
      case 1:
        setActiveComponent(WatchList);
        break;
      case 2:
        setActiveComponent(OperationsPage);
        break;
      case 3: 
        setActiveComponent(ProfilePage);
        break;
      default:
        setActiveComponent(ProfilePage);
        break;
    }
  },[active]);

  return (
    <Router>
      <div >
        <Routes>
          <Route path='/' element={< NavComponent children={activeComponent} />} />
          <Route path="*" element={<ErrorPage text="404 Page Not Found :(" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

