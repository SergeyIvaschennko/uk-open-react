import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";

function App() {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Search />} />
        </Routes>
    );
}

export default App;

