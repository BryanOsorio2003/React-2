// import React from 'react';
import React, { useState } from "react";
import './Card.css';

export const Card = () => {
    const [datal,setCharacters] = useState([])
    const url = 'https://rickandmortyapi.com/api/character' 
    fetch(url)
    .then(response => response.json())
    .then(data=>setCharacters(data.results));
    return (
        <>
        <div className="Cards">
            <div className="Card">
            {
                datal.map((option)=>(
                    <>
                        <p>{option.name}</p>
                        <img src={option.image} alt={option.character} />
                        <p>{option.quote}</p>
                    </>
                    ))
            }
            </div>
        </div>
        </>
    )
}