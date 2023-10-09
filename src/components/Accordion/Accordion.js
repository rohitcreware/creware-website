"use client";
import React, { useEffect, useState } from 'react';
import "../Accordion/Accordion.scss"

const DynamicAccordion = ({ items, sendData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    let timer;

    const plus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 648 712'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' fill='white'/%3E%3C/svg%3E"
    const minus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 648 712'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' fill='white'/%3E%3C/svg%3E"
    useEffect(() => {
        timer = setInterval(() => {
            if(activeIndex == (items.length - 1)){
                setActiveIndex(0)
                onClick(0)
            } else {
                setActiveIndex(activeIndex + 1)
                onClick(activeIndex + 1)
            }
            clearInterval(timer )
        },3000)
    },[activeIndex])

    const toggleAccordion = (index) => {
        clearInterval(timer)
        if (activeIndex === index) {
            // If the clicked item is already open, close it
            setActiveIndex(null);
        } else {
            // Otherwise, open the clicked item
            setActiveIndex(index);
            onClick(index)
        }
    };
    
    const onClick = (index) => {
        console.log(index)
        sendData(index+1)
      }

    return (
        <div className="accordion" id="accordionExample">
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button className={`accordion-button collapsed ${activeIndex === index ? 'active' : ''}`}
                            type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            onClick={() => toggleAccordion(index)}
                            aria-controls={`collapse${index}`}>
                            <div className={`ms-0 ms-sm-3 d-flex text-white fs-4 fw-light ${activeIndex === index ? `crewareRed` : ''}`}><img className={`mx-3 fa-solid text-white`} src={`${activeIndex === index ? plus : minus}`} />{item.title}</div>
                        </button>
                    </h2>
                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body pt-0">
                            <p className='text-white text-start ps-5 ms-4 fw-lighter'>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default DynamicAccordion;
