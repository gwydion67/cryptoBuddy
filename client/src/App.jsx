import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route , RouterProvider, Link, useNavigate } from 'react-router-dom' 

import Navbar from './components/NavBar'
import HomePage from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import OperationsPage from './pages/Operations'
import ProfilePage from './pages/Profile'
import WhatchList from './pages/Watchlist'

function App() {

  const [active,setActive] = useState(0);
  const buttons = ["Home","Watchlist", "Operations"];


  const NavComponent = ({children}) =>{
    return (
      <>
        <Navbar active={active} setActive={setActive} buttons={buttons} />
        {active == 0 && <HomePage />} 
        {active == 1 && <WhatchList />} 
        {active == 2 && <OperationsPage />} 
        {active == 3 && <ProfilePage />} 
        { !([0,1,2,3].includes(active) && <Link to={'/error'} /> )}
      </>
    )
  }

  return (
    <Router>
      <div >
        <Routes>
          <Route path='/' element={< NavComponent />} />
          <Route path="*" element={<ErrorPage text="404 Page Not Found :(" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

