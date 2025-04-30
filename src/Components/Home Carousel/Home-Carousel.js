import React, { useEffect, useRef, useState } from 'react';
import './Home-Carousel.css';
import HomeItem from "../Home Item/Home-Item";
import axios from "axios";

const HomeCarousel = ({ endpoint }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 5;
    const totalItems = 10;
    const carouselRef = useRef(null); // Реф для карусели

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - itemsToShow));
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            // Вычислить размеры и обновить состояние
            const itemWidth = carousel.querySelector('.carousel-item')?.offsetWidth || 0;
            const offset = -(currentIndex * (itemWidth + 12));
            carousel.style.transform = `translateX(${offset}px)`;
        }
    }, [currentIndex]);




    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8080${endpoint}`);
                const data = response.data;

                const mapped = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    imageSrc: item.moviesSeriesMeta?.pic || '', // может быть undefined
                    typeOfContent: item.typeOfContent?.name || '',
                }));

                setItems(mapped);
            } catch (error) {
                console.error('Ошибка загрузки данных для карусели:', error);
            }
        };

        fetchItems();
    }, [endpoint]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel" ref={carouselRef}>
                    {items.map(item => (
                        <HomeItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imageSrc={item.imageSrc}
                            typeOfContent={item.typeOfContent}
                        />
                    ))}
                </div>
            </div>
            <button className="carousel-button left-button" onClick={handlePrevious}>
                <svg className="left-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button className="carousel-button right-button" onClick={handleNext}>
                <svg className="right-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};

export default HomeCarousel;
