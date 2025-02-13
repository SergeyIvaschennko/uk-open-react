import { useState, useEffect } from "react";
import './Home.css';
import covers from "../../Pics/Component 46.png"
import harruPotterSearch from "../../Pics/Component 47.png"
import table from "../../Pics/Component 48.png"

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
            <div className="welcome-page-content-container logo-container">
                <div className="logo">
                    <span style={{ color: 'black' }}>uk</span> <span style={{ color: '#4169E1' }}>open</span>
                </div>
            </div>
            <div className="welcome-page-content-container slogan-container">
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
            <div className="welcome-page-content-container grey-container">
                <div className="space">
                    <div>
                        <div className="Montserrat bold">Найди фильм или сериал</div>
                        <div className="Montserrat medium">Более 200 подборок </div>
                    </div>
                </div>
                <div className="space">
                    <img src={harruPotterSearch} className="harrypotter-search" alt="Heart Icon"/>
                </div>
            </div>
            <div className="welcome-page-content-container white-container">
                <div className="space">
                    <div>
                        <div className="Montserrat bold">Сначала слова -</div>
                        <div className="Montserrat bold">потом магия кино!</div>
                        <div className={"text-space"}>
                            <div className="Montserrat medium"> Да, мы собрали для тебя слова,
                                которые <span style={{ color: "#4169E1", fontWeight: "600" }}>встречаются в фильме</span>. Выучи и освой их перед просмотром!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space">
                    <img src={table} className="table-pic" alt="Heart Icon"/>
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
