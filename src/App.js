import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Film from "./Pages/Film/Film";
import Series from "./Pages/Series/Series";

function App() {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Search />} />
            <Route exact path="/film" element={<Film />} />
            <Route exact path="/series" element={<Series />} />
        </Routes>
    );
}

export default App;

