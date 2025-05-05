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
            <Route exact path="/film/:movieId" element={<Film />} />
            <Route exact path="/series/:movieId" element={<Series />} />
        </Routes>
    );
}

export default App;

