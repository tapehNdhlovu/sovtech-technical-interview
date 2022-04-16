import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import NewPage from "./pages/new-page/NewPage";
import Search from "./pages/search/Search";
import Person from "./pages/person/Person";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <div className="App justify-content-center">
      <Routes>
        <Route strict exact path="/" element={<Home />} />
        <Route strict exact path="/page/:pageNumber" element={<NewPage />} />
        <Route strict exact path="/search" element={<Search />} />
        <Route strict exact path="/details/:personName" element={<Person />} />
        <Route strict exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
