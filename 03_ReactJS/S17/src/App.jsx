import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Electronics from "./pages/electronics/Electronics";
import Home from "./pages/home/Home";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Jewelery from "./pages/jewelery/Jewelery.jsx";
import Map from "./components/map/Map.jsx";
import Products from "./components/products/Products.jsx";
import A from "./components/relations/A.jsx";
import UseRefComp from "./components/use-ref/UseRefComp.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import UseReducerComp from "./components/use-reducer/UseReducerComp.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />
        <Route path={"/jewelery"} element={<Jewelery />} />
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
