import React, { lazy, Suspense } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "Components/LayoutComponents/Header";
import Loading from "Components/CustomComponents/Loading";
import { AnimatePresence } from "framer-motion";
import Footer from "Components/LayoutComponents/Footer";
import { getToken } from "Redux/localstorage";
import { Navigate } from "react-router-dom";
import Dashboard from "Screens/Dashboard";
import Schema from "async-validator";

Schema.warning = function () {};


function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = getToken();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function LoggedIn({ children, redirectTo }) {
  let isAuthenticated = getToken();
  return isAuthenticated ? <Navigate to={redirectTo} /> : children;
}

function App() {
  const location = useLocation();
  const LazyLanding = lazy(() => import("Screens/LandingScreen"));
  const LazyLogin = lazy(() => import("Screens/LoginScreen"));
  const LazySignUp = lazy(() => import("Screens/SignUpScreen"));
  const LazyCalculator = lazy(() => import("Screens/CostScreen"));
  const LazyPostAdd = lazy(() => import("Screens/PostAd"));
  const LazyListing = lazy(() => import("Screens/PropertyListing"));
  const LazyDetail = lazy(() => import("Screens/SingleProperty"));
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        {location.pathname !== "/signup" && location.pathname !== "/signin" ? (
          <Header />
        ) : null}
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<LazyLanding />} />
            <Route
              path="/post-add"
              element={
                <RequireAuth redirectTo={"/"}>
                  <LazyPostAdd />
                </RequireAuth>
              }
            />
            <Route
              path="/signup"
              element={
                <LoggedIn redirectTo={"/"}>
                  <LazySignUp />
                </LoggedIn>
              }
            />
            <Route
              path="/signin"
              element={
                <LoggedIn redirectTo={"/"}>
                  <LazyLogin />
                </LoggedIn>
              }
            />
            <Route
              path="/property-list/:city/:location/:propertySubType/:propertyIntent"
              element={<LazyListing />}
            />
            <Route
              path="/property-detail/:propertyid"
              element={<LazyDetail />}
            />
            <Route path="/costcalculator" element={<LazyCalculator />} />
            <Route
              path="/dashboard/*"
              element={
                <RequireAuth redirectTo={"/"}>
                  <Dashboard />
                </RequireAuth>
              }
            />
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
