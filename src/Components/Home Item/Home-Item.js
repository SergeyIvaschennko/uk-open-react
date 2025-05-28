import './Home-Item.css';
import React from "react";
import {useNavigate} from "react-router-dom";

const HomeItem = ({ id, name, imageSrc, typeOfContent }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Клик по элементу:", { id, typeOfContent });
        if (typeOfContent === 'Movie') {
            navigate(`/film/${id}`);
        } else if (typeOfContent === 'TV Show') {
            navigate(`/series/${id}`);
        } else if (typeOfContent === 'Cartoon') {
            navigate(`/film/${id}`);
        } else {
            console.warn('Неизвестный тип контента:', typeOfContent);
        }
    };

    return (
        <div className="carousel-item" onClick={handleClick}>
            <div className="item-pic">
                <img src={imageSrc} alt={name} />
            </div>
        </div>
    );
};

export default HomeItem;