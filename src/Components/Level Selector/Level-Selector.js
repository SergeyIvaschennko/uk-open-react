import React, { useState } from 'react';
import './Level-Selector.css';

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const LevelSelector = () => {
    const [activeIndex, setActiveIndex] = useState(1); // A2 по умолчанию

    return (
        <div className="level-selector">
            <div
                className="highlight"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />
            {levels.map((level, index) => (
                <div
                    key={level}
                    className={`level-item ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {level}
                </div>
            ))}
        </div>
    );
};

export default LevelSelector;
