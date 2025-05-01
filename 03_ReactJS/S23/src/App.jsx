import "./App.css";
import { lazy, Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// import Electronics from "./pages/electronics/Electronics";
import Home from "./pages/home/Home";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Jewelery from "./pages/jewelery/Jewelery.jsx";
import SignIn from "./pages/sign-in/Signin.jsx";
import SignUp from "./pages/Sign-up/Signup.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import authContext from "./context/auth.js";

const Header = lazy(() => import("./Header.jsx"));
const Electronics = lazy(() => import("./pages/electronics/Electronics.jsx"));

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
        {state.isUserLoggedIn && (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Header />
          </Suspense>
        )}
        <Routes>
          <Route
            path={"/"}
            element={state.isUserLoggedIn ? <Home /> : <SignIn />}
          />
          <Route
            path={"/signup"}
            element={!state.isUserLoggedIn && <SignUp />}
          />
          <Route
            path={"/electronics"}
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                {state.isUserLoggedIn ? <Electronics /> : <Navigate to="/" />}
              </Suspense>
            }
          />
          <Route
            path={"/mens"}
            element={state.isUserLoggedIn ? <Mens /> : <Navigate to="/" />}
          />
          <Route
            path={"/womens"}
            element={state.isUserLoggedIn ? <Womens /> : <Navigate to="/" />}
          />
          <Route
            path={"/jewelery"}
            element={state.isUserLoggedIn ? <Jewelery /> : <Navigate to="/" />}
          />
          <Route
            path={"/productdetails/:id"}
            element={
              state.isUserLoggedIn ? <ProductDetails /> : <Navigate to="/" />
            }
          />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </authContext.Provider>
    </div>
  );
}

export default App;
