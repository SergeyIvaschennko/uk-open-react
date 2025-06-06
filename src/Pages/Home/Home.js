import './Home.css';
import '../../Components/Navbar/Navbar.css';
import harruPotterSearch from "../../Pics/Component 47.png"
import table from "../../Pics/Component 48.png"
import burn from "../../Pics/bVk1Mfu4XDw.jpg"
import tryy from "../../Pics/Component 53.png"
import hp from "../../Pics/Component 54.png"
import stars from "../../Pics/Component 55.png"
import greenorange from "../../Pics/green-orange-gradient.jpg"
import curvetext from "../../Pics/curve text.png"
import wof from "../../Pics/image (1).png"
import one from "../../Pics/image (2).png"
import knife from "../../Pics/image (3).png"
import hole from "../../Pics/image (4).png"
import ryan from "../../Pics/image (5).png"
import Footer from "../../Components/Footer/Footer";
import Search from "../Search/Search";
import {useEffect, useState} from "react";

function App() {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem("visited");
        if (!visited) {
            setIsFirstVisit(true);
            localStorage.setItem("visited", "true"); // Запоминаем пользователя
        }
    }, []);

    // return (
    //     <div>
    //         {isFirstVisit ? <WelcomeScreen setIsFirstVisit={setIsFirstVisit} /> : <Search />}
    //     </div>
    // );
    return (
        <div>
            {isFirstVisit ? (
                <>
                    {console.log("Показываем WelcomeScreen")}
                    <WelcomeScreen setIsFirstVisit={setIsFirstVisit} />
                </>
            ) : (
                <>
                    {console.log("Показываем Search")}
                    <Search />
                </>
            )}
        </div>
    );

}

function WelcomeScreen({ setIsFirstVisit }) {
    const handleStart = () => {
        setIsFirstVisit(false);
    };
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
                                    <button className="start-button" onClick={handleStart}>
                                        Начать
                                    </button>
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
                </div>
            </div>


            <div className="grey-container">
                <div className="welcome-page-content-container">
                    <div className="space">
                        <div>
                            <div className="Montserrat bold transport-black">Найди фильм или сериал</div>
                            <div className="Montserrat medium indent grey">Более 200 подборок </div>
                        </div>
                    </div>
                    <div className="space">
                        <img src={harruPotterSearch} className="harrypotter-search" alt="Heart Icon"/>
                    </div>
                </div>
            </div>

            <div className="welcome-page-content-container white-container">
                <div className="space">
                    <div>
                        <div className="Montserrat bold transport-black">Сначала слова -</div>
                        <div className="Montserrat bold transport-black">потом магия кино!</div>
                        <div className={"text-space"}>
                            <div className="Montserrat medium indent grey"> Да, мы собрали для тебя слова,
                                которые <span style={{ color: "#4169E1", fontWeight: "600" }}>встречаются в фильме</span>. Выучи и освой их перед просмотром!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space">
                    <img src={table} className="table-pic" alt="Heart Icon"/>
                </div>
            </div>


            <div className="imagee-container">
                <img src={greenorange} alt="Main" className="backgroundd-image" style={{ filter: 'brightness(0.4) blur(20px)' }}/>
                <div className="overlayy-hard">

                    <div className="welcome-page-content-container black-container">
                        <div className="stars-overlay">
                            <img src={stars} className="stars-pic" alt="Heart Icon"/>
                        </div>
                        <div className="space">
                            <div>
                                <div className="Montserrat bold white">Ready? Let’s watch!</div>
                                <div className={"text-space"}>
                                    <div className="Montserrat medium indent white">
                                        Теперь ты готов к просмотру, а запоминать слова стало намного проще!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space">
                            <img src={hp} className="harry-potter-pic" alt="Heart Icon"/>
                        </div>
                    </div>
                    <img src={curvetext} alt="Main" className="curve-text"/>
                    <div className="welcome-page-content-container black-container">
                        <div className="cards-container">
                            <img src={"https://ru-images.kinorium.com/movie/1080/1545339.jpg?1683884685"} className="card" alt="Heart Icon"/>
                            <img src={"https://images-s.kinorium.com/movie/poster/143897/w1500_51624472.jpg"} className="card" alt="Heart Icon"/>
                            <img src={"https://images.kinorium.com/movie/poster/472809/w1500_51624360.jpg"} className="card" alt="Heart Icon"/>
                            <img src={"https://images.kinorium.com/movie/poster/352641/w1500_54591633.jpg"} className="card" alt="Heart Icon"/>
                            <img src={"https://ru-images.kinorium.com/movie/1080/8539142.jpg?1721051478"} className="card" alt="Heart Icon"/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>





        </>
    );
}

// function MainScreen() {
//     return (
//         <div>
//             <h1>Главная страница</h1>
//             <p>Теперь ты всегда будешь попадать сюда сразу!</p>
//         </div>
//     );
// }

export default App;


