import React, { useEffect, useRef, useState } from 'react';
import './Home-Carousel.css';
import HomeItem from "../Home Item/Home-Item";
import wof from "../../Pics/image (1).png";
import one from "../../Pics/image (2).png";
import knife from "../../Pics/image (3).png";
import hole from "../../Pics/image (4).png";
import ryan from "../../Pics/image (5).png";

const HomeCarousel = () => {
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

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel" ref={carouselRef}>
                    <HomeItem
                        imageSrc={wof}
                        name="A Game of Thrones"
                        author="George R. R. Martin"
                        price={20}
                    />
                    <HomeItem
                        imageSrc={one}
                        name="Animal farm"
                        author="George Orwell"
                        price={10}
                    />
                    <HomeItem
                        imageSrc={knife}
                        name="A tale of two cities"
                        author="Charles Dickens"
                        price={13}
                    />
                    <HomeItem
                        imageSrc={hole}
                        name="American gods"
                        author="Neil Gaiman"
                        price={19}
                    />
                    <HomeItem
                        imageSrc={ryan}
                        name="The Great Gatsby"
                        author="F. Scott Fitzgerald"
                        price={15}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF894,1000_QL80_.jpg"
                        name="1984"
                        author="George Orwell"
                        price={12}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF894,1000_QL80_.jpg"
                        name="To Kill a Mockingbird"
                        author="Harper Lee"
                        price={18}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/71CR-BOauCL._AC_UF894,1000_QL80_.jpg"
                        name="Pride and Prejudice"
                        author="Jane Austen"
                        price={14}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg"
                        name="Moby Dick"
                        author="Herman Melville"
                        price={22}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/51lLr8b16DL.jpg"
                        name="War and Peace"
                        author="Leo Tolstoy"
                        price={25}
                    />
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
