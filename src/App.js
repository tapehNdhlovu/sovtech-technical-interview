import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import NewPage from "./pages/new-page/NewPage";
import Search from "./pages/search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<Home />} />
        <Route strict exact path="/page/:pageNumber" element={<NewPage />} />
        <Route strict exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
