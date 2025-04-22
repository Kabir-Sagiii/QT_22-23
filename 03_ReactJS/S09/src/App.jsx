import "./App.css";
import Header from "./Header";
import Categoris from "./components/categories/Categoris";
import StateDemo from "./components/state-concept/StateDemo";
import ImageState from "./components/state-concept/ImageState";
function App() {
  return (
    <div className="app">
      <Header />
      <StateDemo />
      <hr />
      <ImageState />
    </div>
  );
}

export default App;
