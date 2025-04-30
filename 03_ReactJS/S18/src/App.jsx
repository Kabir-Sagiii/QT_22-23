import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Electronics from "./pages/electronics/Electronics";
import Home from "./pages/home/Home";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Jewelery from "./pages/jewelery/Jewelery.jsx";

import SignIn from "./pages/sign-in/Signin.jsx";
import SignUp from "./pages/Sign-up/Signup.jsx";

import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import { useState } from "react";
import authContext from "./context/auth.js";
function App() {
  const [state, setState] = useState({
    isUserLoggedIn: false,
  });
  function login() {
    setState({
      isUserLoggedIn: true,
    });
  }

  function logout() {
    setState({
      isUserLoggedIn: false,
    });
  }
  return (
    <div className="app">
      <authContext.Provider value={{ state, login, logout }}>
        {state.isUserLoggedIn && <Header />}
        <Routes>
          {/* {loggedin ? (
          <Route path={"/"} element={<Home />} />
        ) : (
          <Route path={"/"} element={<SignIn />} />
        )} */}

          <Route
            path={"/"}
            element={state.isUserLoggedIn ? <Home /> : <SignIn />}
          />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/electronics"} element={<Electronics />} />
          <Route path={"/mens"} element={<Mens />} />
          <Route path={"/womens"} element={<Womens />} />
          <Route path={"/jewelery"} element={<Jewelery />} />
          <Route path={"/productdetails/:id"} element={<ProductDetails />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </authContext.Provider>
    </div>
  );
}

export default App;
