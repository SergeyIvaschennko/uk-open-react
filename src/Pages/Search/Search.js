import React, {useEffect, useRef, useState} from "react";
import burn from "../../Pics/bVk1Mfu4XDw.jpg";
import marty from "../../Pics/Back-to-the-Future-Featured-Image.jpg";
import './Search.css';
import lupa from "../../Pics/Component 13.png";
import wof from "../../Pics/image (1).png";
import one from "../../Pics/image (2).png";
import knife from "../../Pics/image (3).png";
import hole from "../../Pics/image (4).png";
import ryan from "../../Pics/image (5).png";
import Heading from "../../Components/Heading/Heading";
import Footer from "../../Components/Footer/Footer";
import BlackFooter from "../../Components/Black Footer/Black Footer";


const Search = () => {


    return (
        <>
            <div className="search-container">
                <div className="image-container">
                    <img src={marty} alt="Main" className="image-marty" />
                    <div className="overlay">
                        <div className="navbar-container">
                            <div className="navbar">
                                <div className="logo">
                                    <span>uk open</span>
                                </div>
                            </div>
                        </div>
                        <div className="search-section">
                            {/*<div className="search-overlay">*/}
                                <div className="Montserrat bold white">Поиск</div>
                                <p>Более 200 фильмов, сериалов и мультфильмов!</p>
                                <div className="search-box">
                                    <input type="text" placeholder="Назад в будущее..."/>
                                    <button>
                                        <img src={lupa} alt="иконка" width="20" height="20" />
                                    </button>
                                </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>



            <Heading
                mainHeading="Шедевры"
                subHeading="Лучшие фильмы"
            />
            <div className="welcome-page-content-container black-container">
                <div className="cards-container">
                    <img src={wof} className="card" alt="Heart Icon"/>
                    <img src={one} className="card" alt="Heart Icon"/>
                    <img src={knife} className="card" alt="Heart Icon"/>
                    <img src={hole} className="card" alt="Heart Icon"/>
                    <img src={ryan} className="card" alt="Heart Icon"/>
                </div>
            </div>




            <Heading
                mainHeading="24-25"
                subHeading="Новинки"
            />
            <div className="welcome-page-content-container black-container">
                <div className="cards-container">
                    <img src={wof} className="card" alt="Heart Icon"/>
                    <img src={one} className="card" alt="Heart Icon"/>
                    <img src={knife} className="card" alt="Heart Icon"/>
                    <img src={hole} className="card" alt="Heart Icon"/>
                    <img src={ryan} className="card" alt="Heart Icon"/>
                </div>
            </div>




            <Heading
                mainHeading="Невозможно оторваться"
                subHeading="Лучшие сериалы"
            />
            <div className="welcome-page-content-container black-container">
                <div className="cards-container">
                    <img src={wof} className="card" alt="Heart Icon"/>
                    <img src={one} className="card" alt="Heart Icon"/>
                    <img src={knife} className="card" alt="Heart Icon"/>
                    <img src={hole} className="card" alt="Heart Icon"/>
                    <img src={ryan} className="card" alt="Heart Icon"/>
                </div>
            </div>



            <Heading
                mainHeading="Мир анимации"
                subHeading="Лучшие мультфильмы"
            />
            <div className="welcome-page-content-container black-container">
                <div className="cards-container">
                    <img src={wof} className="card" alt="Heart Icon"/>
                    <img src={one} className="card" alt="Heart Icon"/>
                    <img src={knife} className="card" alt="Heart Icon"/>
                    <img src={hole} className="card" alt="Heart Icon"/>
                    <img src={ryan} className="card" alt="Heart Icon"/>
                </div>
            </div>

            <BlackFooter/>
        </>
    );
};

export default Search;
