import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
}

export default App;

