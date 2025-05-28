import React, {useEffect, useRef, useState} from "react";
import marty from "../../Pics/Back-to-the-Future-Featured-Image.jpg";
import './Search.css';
import lupa from "../../Pics/Component 13.png";
import Heading from "../../Components/Heading/Heading";
import BlackFooter from "../../Components/Black Footer/Black Footer";
import HomeCarousel from "../../Components/Home Carousel/Home-Carousel";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const formatQuery = (query) => {
        return query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim().length > 1) {
                const formattedQuery = formatQuery(query);
                axios.get(`http://localhost:8080/search?q=${formattedQuery}`)
                    .then(res => {
                        setResults(res.data);
                        setShowResults(true);
                    })
                    .catch(err => {
                        console.error("Ошибка поиска:", err);
                        setShowResults(false);
                    });
            } else {
                setShowResults(false);
                setResults([]);
            }
        }, 300); // 300 мс задержка

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const handleRedirect = (item) => {
        if (item.typeOfContent?.name === 'Movie' || item.typeOfContent?.name === 'Cartoon') {
            navigate(`/film/${item.id}`);
        } else if (item.typeOfContent?.name === 'TV Show') {
            navigate(`/series/${item.id}`);
        }
    };



    return (
        <>
            <div className="search-container">
                <div className="image-container">
                    <img src={marty} alt="Main" className="image-marty" />
                    <div className="overlay">
                        <div className="navbar-container">
                            <div className="navbar">
                                <Link to="/" className="logo">
                                    <span>uk open</span>
                                </Link>
                            </div>
                        </div>
                        <div className="search-section">
                            {/*<div className="search-overlay">*/}
                                <div className="Montserrat bold white">Поиск</div>
                                <p>Более 200 фильмов, сериалов и мультфильмов!</p>
                                <div className="search-box">
                                    <input
                                        type="text"
                                        placeholder="Назад в будущее..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        onFocus={() => setShowResults(true)}
                                    />
                                    <button>
                                        <img src={lupa} alt="иконка" width="20" height="20" />
                                    </button>
                                </div>

                                {showResults && (
                                    <div className="search-results">
                                        {results.length > 0 ? (
                                            results.map(item => (
                                                // <div key={item.id} className="result-item" onClick={() => handleRedirect(item)}>
                                                //     {item.name}
                                                // </div>
                                                <div key={item.id} className="result-item" onClick={() => handleRedirect(item)}>
                                                    <div className="result-thumbnail-wrapper">
                                                        <img src={item.moviesSeriesMeta.pic} alt={item.name} className="result-thumbnail" />
                                                    </div>
                                                    <div className="result-title">{item.name}</div>
                                                    <div className="result-year">{item.moviesSeriesMeta.year}</div>
                                                </div>
                                            ))
                                        ) : (
                                            // <div className="result-item">Ничего не найдено</div>
                                            <div></div>
                                        )}
                                    </div>
                                )}

                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>



            <Heading
                mainHeading="Шедевры"
                subHeading="Лучшие фильмы"
            />
            <HomeCarousel endpoint="/top-movies"/>

            <Heading
                mainHeading="24-25"
                subHeading="Новинки"
            />
            <HomeCarousel endpoint="/released-in-2024-or-2025"/>

            <Heading
                mainHeading="Невозможно оторваться"
                subHeading="Лучшие сериалы"
            />
            <HomeCarousel endpoint="/top-series"/>

            <Heading
                mainHeading="Мир анимации"
                subHeading="Лучшие мультфильмы"
            />
            <HomeCarousel endpoint="/top-cartoons"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <BlackFooter/>
        </>
    );
};

export default Search;
