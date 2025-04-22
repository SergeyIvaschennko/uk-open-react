import React, {useEffect, useRef, useState} from "react";
import './Film.css';
import '../../Components/Navbar/Navbar.css';
import table from "../../Pics/Component 48.png";
import Footer from "../../Components/Footer/Footer";
import BlackFooter from "../../Components/Black Footer/Black Footer";
import Dropdown from "../../Components/Dropdown/Dropdown";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import LevelSelector from "../../Components/Level Selector/Level-Selector";




const Film = () => {
    const { categoryName } = useParams(); // Получаем категорию из URL
    const [activeCategory, setActiveCategory] = useState(categoryName || 'Fiction');

    useEffect(() => {
        setActiveCategory(categoryName || 'Fiction');
    }, [categoryName]);

    const { search } = useLocation(); // Получаем query-параметры из URL
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(search);
    const initialAge = queryParams.get('age') || 'Все';

    const categories2 = ['Все', 'Существительные', 'Глаголы', 'Прилагательные', 'Наречия'];

    const [selectedAge, setSelectedAge] = useState(initialAge);


    const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);

    useEffect(() => {
        // Сброс фильтров при изменении категории
        setSelectedAge('Части речи');
        setIsAgeDropdownOpen(false);
    }, [categoryName]);


    // const [subcategories, setSubcategories] = useState(subcategoriesMap['Fiction']);  // Начальное значение - подкатегории для Fiction
    // const [selectedSubcategory, setSelectedSubcategory] = useState('All categories');
    //
    // // Обновляем подкатегории при изменении основной категории
    // useEffect(() => {
    //     setSubcategories(subcategoriesMap[activeCategory] || []);
    //     setSelectedSubcategory('All categories'); // Сбрасываем выбранную подкатегорию при смене основной категории
    // }, [activeCategory]);

    // useEffect(() => {
    //     // Обновление URL с фильтрами, включая подкатегорию
    //     const params = new URLSearchParams();
    //     if (selectedAge !== 'All ages') params.set('age', selectedAge);
    //     if (selectedOrigin !== 'All origins') params.set('origin', selectedOrigin);
    //     if (selectedFormat !== 'All formats') params.set('format', selectedFormat);
    //
    //     navigate(`/film/${categoryName}?${params.toString()}`, { replace: true });
    // }, [selectedCategory, selectedAge, selectedOrigin, selectedFormat, categoryName]);


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
                <div className="learn-watch">
                    <div className="Charis regular black">Основной вокабуляр</div>
                </div>
                <br/>
                <div className="learn-watch">
                    <div className="table-container">
                        <div className="table-head">
                            <LevelSelector/>
                            <Dropdown
                                categories={categories2}
                                defaultCategory="Age"
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
                            <div className="trnsp-row">
                                <th className="Montserrat medium grey">1</th>
                                <th className="Montserrat medium grey eng">Apple</th>
                                <th className="Montserrat medium grey rus">Яблоко</th>
                            </div>
                            <div className="trnsp-row">
                                <th className="Montserrat medium grey">20</th>
                                <th className="Montserrat medium grey eng">Captain</th>
                                <th className="Montserrat medium grey rus">Капитан</th>
                            </div>
                            <div className="trnsp-row">
                                <th className="Montserrat medium grey">300</th>
                                <th className="Montserrat medium grey eng">Head</th>
                                <th className="Montserrat medium grey rus">Голова</th>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="learn-watch">
                    <div className="Charis regular black">Выражения</div>
                </div>

            </div>
            <BlackFooter/>
        </>
    );
};

export default Film;
