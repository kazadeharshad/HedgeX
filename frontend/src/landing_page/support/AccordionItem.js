import React from "react";

const AccordionItem = ({title, points, isOpen, onClick}) => {
    return (
        <div className="accordion-item py-2 my-3 border-top">
            <div className={`accordion-header pb-3 ${isOpen ? "active" : ""}`} onClick={onClick}>
                {title}
                <span className={`arrow ${isOpen ? "rotate" : ""}`}>
                    <i class="fa-solid fa-angle-down"></i>
                </span>
            </div>

            <div className={`accordion-content ${isOpen ? "active" : ""}`}>
                <ul>
                    {points.map((point, index) => (
                        <li key={index} className="py-2 links">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AccordionItem;
