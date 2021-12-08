// import React from 'react';
import React, { useState } from "react";
import './Card.css';

export const Card = () => {
    const [data,setCharacters] = useState([])
    const url = 'https://rickandmortyapi.com/api/character' 
    fetch(url)
    .then(response => response.json())
    .then(data=>setCharacters(data.results));
    console.log(data.results);

    return (
        <>
        <div className="Card">
        {
            data.map((option)=>(
                <>
                    <p>{option.name}</p>
                    <img src={option.image} alt={option.character} />
                    <p>{option.quote}</p>
                </>
                ))
            }
        </div>
        </>
    )
}