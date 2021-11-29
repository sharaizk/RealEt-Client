import React from 'react'
import 'antd/dist/antd.css';
import './index.css'
import {Routes, Route,useLocation} from 'react-router-dom'
import LandingScreen from './Screens/LandingScreen'
import SignUpScreen from './Screens/SignUpScreen'
import LoginScreen from './Screens/LoginScreen'
import Header from './Components/LayoutComponents/Header'
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/signup" && location.pathname !== '/signin' ?<Header/>:null}
      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<LandingScreen />}/>
        <Route path="/signup" element={<SignUpScreen/>} />
        <Route path="/signin" element={<LoginScreen/>}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
