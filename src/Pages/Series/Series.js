import React, { useEffect, useRef, useState } from "react";
import '../../Pages/Series/Series.css';
import '../../Components/Navbar/Navbar.css';
import BlackFooter from "../../Components/Black Footer/Black Footer";
import axios from "axios";
import '../../Components/Dropdown/Dropdown.css';
import '../../Components/Level Selector/Level-Selector.css';
import {Link, useNavigate, useParams} from "react-router-dom";

const categories2 = ['Все', 'Существительные', 'Глаголы', 'Прилагательные', 'Наречия'];
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const Series = () => {
    const { movieId: movieIdParam } = useParams();
    const movieId = Number(movieIdParam);
    const navigate = useNavigate();
    const [movieMeta, setMovieMeta] = useState(null);

    const [selectedAge, setSelectedAge] = useState('Все');
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [seasonsData, setSeasonsData] = useState([]);
    const [selectedSeasonId, setSelectedSeasonId] = useState(null);
    const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);
    const [availableEpisodes, setAvailableEpisodes] = useState([]);
    const [words, setWords] = useState([]);
    const [expressions, setExpressions] = useState([]);
    const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
    const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false);
    const [isEpisodeDropdownOpen, setIsEpisodeDropdownOpen] = useState(false);

    // const movieId = 1;

    useEffect(() => {
        const fetchMeta = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/${movieId}/movieseries`);
                const data = response.data;
                if (data.typeOfContent?.name === "Movie") {
                    navigate(`/film/${movieId}`);
                    return;
                }
                setMovieMeta(data);
            } catch (err) {
                console.error('Ошибка загрузки меты:', err);
            }
        };

        fetchMeta();
    }, [movieId, navigate]);

    useEffect(() => {
        const fetchSeasons = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/${movieId}/seasonsnepisodes`);
                setSeasonsData(response.data);

                if (response.data.length > 0) {
                    const firstSeason = response.data[0];
                    setSelectedSeasonId(firstSeason.id);
                    setAvailableEpisodes(firstSeason.episodes);
                    if (firstSeason.episodes.length > 0) {
                        setSelectedEpisodeId(firstSeason.episodes[0].id);
                    }
                }
            } catch (error) {
                console.error("Ошибка загрузки сезонов:", error);
            }
        };

        fetchSeasons();
    }, [movieId]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const params = {};
                if (selectedLevel && selectedLevel !== 'Все') params.level = selectedLevel;
                if (selectedAge && selectedAge !== 'Все') {
                    switch (selectedAge) {
                        case 'Существительные': params.partOfSpeech = 'noun'; break;
                        case 'Глаголы': params.partOfSpeech = 'verb'; break;
                        case 'Прилагательные': params.partOfSpeech = 'adjective'; break;
                        case 'Наречия': params.partOfSpeech = 'adverb'; break;
                        default: break;
                    }
                }

                const response = await axios.get(`http://localhost:8080/find/fltr/series`, {
                    params: {
                        movieId,
                        // seasonId: selectedSeasonId,
                        episodeId: selectedEpisodeId,
                        ...params,
                    },
                });

                setWords(Array.isArray(response.data) ? response.data : response.data.words || []);
            } catch (error) {
                console.error('Ошибка загрузки слов:', error);
            }
        };

        if (selectedSeasonId && selectedEpisodeId) {
            fetchWords();
        }
    }, [selectedAge, selectedLevel, selectedSeasonId, selectedEpisodeId]);

    useEffect(() => {
        const fetchExpressions = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/find/series/expressions`, {
                    params: {
                        movieId,
                        episodeId: selectedEpisodeId,
                    },
                });

                setExpressions(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Ошибка загрузки выражений:', error);
            }
        };

        if (selectedSeasonId && selectedEpisodeId) {
            fetchExpressions();
        }
    }, [movieId, selectedSeasonId, selectedEpisodeId]);

    const handleSeasonSelect = (seasonId) => {
        setSelectedSeasonId(seasonId);
        const selectedSeason = seasonsData.find(season => season.id === seasonId);
        const episodes = selectedSeason?.episodes || [];
        setAvailableEpisodes(episodes);
        if (episodes.length > 0) {
            setSelectedEpisodeId(episodes[0].id);
        }
    };

    if (!movieMeta) return <div></div>;

    const { name, moviesSeriesMeta } = movieMeta;
    const { description, pic, release } = moviesSeriesMeta;

    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <Link to="/home" className="logo">
                        <span className="uk">uk</span> <span className="open">open</span>
                    </Link>
                </div>
            </div>

            <div className="learn-watch-content-container">
                <div className="learn-watch">
                    <img src={pic} className="cover-pic" alt="Poster"/>
                    <div className="space">
                        <div>
                            <div className="Montserrat extra-bold seventy-black">{name}</div>
                            <div className="Montserrat extra-bold thirty-black date-line">{release}</div>
                            <div className="divider"></div>
                            <div className="Golos semi-bold seventy-black">Обзор</div>
                            <div className="review">{description}</div>
                            <DropdownSeason
                                seasons={seasonsData}
                                selectedSeasonId={selectedSeasonId}
                                setSelectedSeasonId={handleSeasonSelect}
                                isOpen={isSeasonDropdownOpen}
                                setIsOpen={setIsSeasonDropdownOpen}
                            />
                            <DropdownEpisode
                                episodes={availableEpisodes}
                                selectedEpisodeId={selectedEpisodeId}
                                setSelectedEpisodeId={setSelectedEpisodeId}
                                isOpen={isEpisodeDropdownOpen}
                                setIsOpen={setIsEpisodeDropdownOpen}
                            />
                        </div>
                    </div>
                </div>

                <br />
                <div className="learn-watch"><div className="divider" /></div>
                <div className="learn-watch"><div className="Charis regular black">Основной вокабуляр</div></div>
                <br />

                <div className="learn-watch">
                    <div className="table-container">
                        <div className="table-head">
                            <LevelSelector selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
                            <Dropdown
                                categories={categories2}
                                selectedCategory={selectedAge}
                                setSelectedCategory={setSelectedAge}
                                isOpen={isAgeDropdownOpen}
                                setIsOpen={setIsAgeDropdownOpen}
                            />
                        </div>
                        <div className="table-divider"></div>
                        <div className="table-middle">
                            <div className="blue-row">
                                <th className="Montserrat medium grey">#</th>
                                <th className="Montserrat medium grey eng">Английское слово</th>
                                <th className="Montserrat medium grey rus">Русский перевод</th>
                            </div>

                            {words.map((word, index) => (
                                <div key={word.id} className="trnsp-row">
                                    <th className="Montserrat medium grey">{index + 1}</th>
                                    <th className="Montserrat medium grey eng">{word.enWord}</th>
                                    <th className="Montserrat medium grey rus">{word.ruWord}</th>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <br />
                <div className="learn-watch"><div className="Charis regular black">Выражения</div></div>
                <br />
                <div className="learn-watch">
                    <div className="vocab-list">
                        {expressions.map((expression) => (
                            <div key={expression.id} className="row">
                                <div className="term">{expression.enWord}</div>
                                <div className="definition">{expression.ruWord}</div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <BlackFooter />
        </>
    );
};

const DropdownSeason = ({ seasons, selectedSeasonId, setSelectedSeasonId, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedSeason = seasons.find(season => season.id === selectedSeasonId);

    return (
        <div className="season-span">
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown-button-season-episode" onClick={toggleDropdown}>
                    <div className="default-category">{selectedSeason ? `Сезон ${selectedSeason.seasonNumber}` : 'Сезон...'}</div>
                    <svg className={`arrow ${isOpen ? 'open' : ''}`}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                {isOpen && (
                    <div className="dropdown-menu-season-episode">
                        {seasons.map((season) => (
                            <div key={season.id} className="dropdown-item" onClick={() => { setSelectedSeasonId(season.id); setIsOpen(false); }}>
                                Сезон {season.seasonNumber}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const DropdownEpisode = ({ episodes, selectedEpisodeId, setSelectedEpisodeId, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedEpisode = episodes.find(ep => ep.id === selectedEpisodeId);

    return (
        <div className="episode-span">
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown-button-season-episode" onClick={toggleDropdown}>
                    <div className="default-category">{selectedEpisode ? `Эпизод ${selectedEpisode.episodeNumber}` : 'Эпизод...'}</div>
                    <svg className={`arrow ${isOpen ? 'open' : ''}`}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                {isOpen && (
                    <div className="dropdown-menu-season-episode">
                        {episodes.map((ep) => (
                            <div key={ep.id} className="dropdown-item" onClick={() => { setSelectedEpisodeId(ep.id); setIsOpen(false); }}>
                                Эпизод {ep.episodeNumber}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const LevelSelector = ({ selectedLevel, setSelectedLevel }) => {
    const activeIndex = levels.indexOf(selectedLevel);
    return (
        <div className="level-selector">
            <div className="highlight" style={{ transform: `translateX(${activeIndex * 100}%)` }} />
            {levels.map((level, index) => (
                <div
                    key={level}
                    className={`level-item ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setSelectedLevel(level)}
                >
                    {level}
                </div>
            ))}
        </div>
    );
};

const Dropdown = ({ categories, selectedCategory, setSelectedCategory, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                <div className="default-category">{selectedCategory}</div>
                <svg className={`arrow ${isOpen ? 'open' : ''}`}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {categories.map((category, index) => (
                        <div key={index} className="dropdown-item" onClick={() => { setSelectedCategory(category); setIsOpen(false); }}>
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Series;
