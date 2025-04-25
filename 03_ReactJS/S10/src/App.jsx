import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Electronics from "./pages/electronics/Electronics";
import Home from "./pages/home/Home";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Map from "./components/page-not-found/Map";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />
        <Route path={"/jewelery"} element={<Map />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
