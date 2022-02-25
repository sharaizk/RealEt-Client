import React, { lazy, Suspense } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/LayoutComponents/Header";
import Loading from "./Components/CustomComponents/Loading";
import { AnimatePresence } from "framer-motion";
import Footer from './Components/LayoutComponents/Footer'
function App() {
  const location = useLocation();
  const LazyLanding = lazy(() => import("./Screens/LandingScreen"));
  const LazyLogin = lazy(() => import("./Screens/LoginScreen"));
  const LazySignUp=lazy(()=>import("./Screens/SignUpScreen"))
  const LazyCalculator = lazy(()=>import("./Screens/CostScreen"))
  const LazyDashboard=lazy(()=>import("./Screens/Dashboard"))
  return (
    <Suspense fallback={<Loading/>}>
      <div className="App">
        {location.pathname !== "/signup" && location.pathname !== "/signin" ? (
          <Header />
        ) : null}
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<LazyLanding />} />
            <Route path="/signup" element={<LazySignUp/>} />
            <Route path="/signin" element={<LazyLogin />} />
            <Route path="/costcalculator" element={<LazyCalculator />} />
            <Route path="/dashboard" element={<LazyDashboard />}/>
          </Routes>
        </AnimatePresence>
        {location.pathname !== "/signup" && location.pathname !== "/signin" ? (
          <Footer />
        ) : null}
      </div>
    </Suspense>
  );
}

export default App;
