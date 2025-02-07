import { useState, useEffect } from "react";
import './Home.css';
import covers from "../../Pics/Component 46.png"

function App() {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    // useEffect(() => {
    //     const visited = localStorage.getItem("visited");
    //     if (!visited) {
    //         setIsFirstVisit(true);
    //         localStorage.setItem("visited", "true"); // Запоминаем пользователя
    //     }
    // }, []);

    return (
        // <div>
        //     {isFirstVisit ? <WelcomeScreen setIsFirstVisit={setIsFirstVisit} /> : <MainScreen />}
        // </div>
        <div>
             <WelcomeScreen/>
        </div>
    );
}

function WelcomeScreen({ setIsFirstVisit }) {
    return (
        <>
            <div className="welcome-page-content-container">
                <div className="logo">
                    <span style={{ color: 'black' }}>uk</span> <span style={{ color: '#4169E1' }}>open</span>
                </div>
            </div>
            <div className="welcome-page-content-container">
                <div className="space">
                    <div className="slogan">MOVIES</div>
                    <div className="slogan">+</div>
                    <div className="slogan">FOREIGN LANGUAGE</div>
                    <div className="slogan">=</div>
                    <div className="slogan">
                        <span className="slogan-highlight">the best learning experience</span>
                    </div>
                </div>
                <div className="space">
                    <img src={covers} className="movie-covers" alt="Heart Icon"/>
                </div>
            </div>
        </>
    );
}

function MainScreen() {
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Теперь ты всегда будешь попадать сюда сразу!</p>
        </div>
    );
}

export default App;
