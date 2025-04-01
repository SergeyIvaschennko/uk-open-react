import { useState, useEffect } from "react";
import './Home.css';
import '../../Components/Navbar/Navbar.css';
import covers from "../../Pics/Component 46.png"
import harruPotterSearch from "../../Pics/Component 47.png"
import table from "../../Pics/Component 48.png"
import burn from "../../Pics/bVk1Mfu4XDw.jpg"
import tryy from "../../Pics/Component 53.png"

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
            <div className="home-container">
                <div className="image-container">
                    <img src={burn} alt="Main" className="background-image" />
                        <div className="overlay">
                            <div className="navbar-container">
                                <div className="navbar">
                                    <div className="logo">
                                        <span>uk open</span>
                                    </div>
                                    <button className="start-button">Начать</button>
                                </div>
                            </div>
                            <div className="slogans-container">
                                <div className="top-left">
                                    MOVIES & FOREIGN <br /> LANGUAGE.
                                </div>
                                <div className="bottom-right">the best learning experience</div>
                            </div>
                            <img src={tryy} alt="Main" className="orbit-img" />




                        </div>

                    {/*<div className="welcome-page-content-container slogan-container">*/}
                    {/*    <div className="space">*/}
                    {/*        <div className="slogan">MOVIES</div>*/}
                    {/*        <div className="slogan">+</div>*/}
                    {/*        <div className="slogan">FOREIGN LANGUAGE</div>*/}
                    {/*        <div className="slogan">=</div>*/}
                    {/*        <div className="slogan">*/}
                    {/*            <span className="slogan-highlight">the best learning experience</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="space">*/}
                    {/*        <img src={covers} className="movie-covers" alt="Heart Icon"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="welcome-page-content-container grey-container">*/}
                    {/*    <div className="space">*/}
                    {/*        <div>*/}
                    {/*            <div className="Montserrat bold transport-black">Найди фильм или сериал</div>*/}
                    {/*            <div className="Montserrat medium grey">Более 200 подборок </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="space">*/}
                    {/*        <img src={harruPotterSearch} className="harrypotter-search" alt="Heart Icon"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="welcome-page-content-container white-container">*/}
                    {/*    <div className="space">*/}
                    {/*        <div>*/}
                    {/*            <div className="Montserrat bold transport-black">Сначала слова -</div>*/}
                    {/*            <div className="Montserrat bold transport-black">потом магия кино!</div>*/}
                    {/*            <div className={"text-space"}>*/}
                    {/*                <div className="Montserrat medium grey"> Да, мы собрали для тебя слова,*/}
                    {/*                    которые <span style={{ color: "#4169E1", fontWeight: "600" }}>встречаются в фильме</span>. Выучи и освой их перед просмотром!*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="space">*/}
                    {/*        <img src={table} className="table-pic" alt="Heart Icon"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="welcome-page-content-container black-container">*/}
                    {/*    <div className="space">*/}
                    {/*        <div>*/}
                    {/*            <div className="Montserrat bold white">Ready? Let’s watch! -</div>*/}
                    {/*            <div className={"text-space"}>*/}
                    {/*                <div className="Montserrat medium white">*/}
                    {/*                    Теперь ты готов к просмотру, а запоминать слова стало намного проще!*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="space">*/}
                    {/*        <img src={table} className="table-pic" alt="Heart Icon"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                </div>
            </div>
            <div className="welcome-page-content-container logo-container">
                <div className="logo">
                    <span style={{ color: 'black' }}>uk</span> <span style={{ color: '#4169E1' }}>open</span>
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
