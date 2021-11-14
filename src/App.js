import React from 'react'
import './index.css'
import {Routes, Route,useLocation} from 'react-router-dom'
import LandingScreen from './Screens/LandingScreen'
import SignUpScreen from './Screens/SignUpScreen'
import LoginScreen from './Screens/LoginScreen'
import Header from './Components/LayoutComponents/Header'
function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="App">
      {location.pathname !== "/signup" && location.pathname !== '/signin' ?<Header/>:null}
      <Routes>
        <Route path="/" element={<LandingScreen />}/>
        <Route path="/signup" element={<SignUpScreen/>} />
        <Route path="/signin" element={<LoginScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
