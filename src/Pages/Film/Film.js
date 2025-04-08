import React, {useEffect, useRef, useState} from "react";
import './Film.css';
import '../../Components/Navbar/Navbar.css';
import table from "../../Pics/Component 48.png";




const Film = () => {


    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="logo">
                        <span className="uk">uk</span> <span className="open">open</span>
                    </div>
                    <button className="start-button">Начать</button>
                </div>
            </div>
            <div className="learn-watch-content-container">
                <div className="learn-watch">
                    <img src={'https://media.mustapp.me/must/posters/w342/s8nco4vYuVwWFvxXR3vyGmS5K7F.jpg'} className="cover-pic" alt="Heart Icon"/>
                    <div className="space">
                        <div>
                            <div className="Montserrat extra-bold seventy-black">Отпуск по обмену</div>
                            <div className="Montserrat extra-bold thirty-black date-line">8 декабря 2006</div>
                            <div className="divider"></div>
                            <div className="Golos semi-bold seventy-black">Обзор</div>
                            <div className="review">
                                Айрис Симпкинс, автор популярной свадебной колонки в лондонской «Daily Telegraph», живет в очаровательном коттедже в английской провинции.
                                Она влюблена в мужчину, который любит другую. Далеко от нее в Южной Калифорнии живет Аманда Вудс, владелица процветающего рекламного агентства,
                                занимающегося созданием роликов для фильмов. Она вдруг обнаруживает, что любимый человек ей изменяет.Две незнакомые друг с другом женщины, живущие на расстоянии 10 000 километров друг от друга,
                                оказываются в сходной ситуации. И они находят друг друга. В Интернете, на сайте обмена жильем на время отпуска. Перед Рождеством Айрис и Аманда решают отдохнуть от своих проблем, договорившись
                                поменяться континентами и пожить друг у друга в течение двух недель.
                            </div>
                            <span className="custom-span">🎄&nbsp;&nbsp;❤️️&nbsp;&nbsp;✈️&nbsp;&nbsp;🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="learn-watch">
                    <div className="divider"></div>
                </div>

            </div>
        </>
    );
};

export default Film;
