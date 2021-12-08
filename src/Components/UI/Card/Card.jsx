import React from "react";
import '../Card/Card.css';
// import { data } from "../Layout/Main/Main"


export const Card=(data)=>{
    const { character, image, quote } = data.data;
    return (
        <section className="Card">
            <p>{character}</p>
            <img src={image} alt={character}/>
            <p>{quote}</p>
        </section>
    )
}