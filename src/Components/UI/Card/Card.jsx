// import React, { useState } from "react";
import React from 'react';
import './Card.css';
// let num = Math.random() * (20 - 1);


export const Card = (data) => {
    const url = 'https://rickandmortyapi.com/api/character'    

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data.results)
    } )
    // setData(data[0])
    // const { character, image, quote } = data.data;
    return (


        <div className="card">
        {/* <img src={image} alt={character} /> */}
        <h2>b</h2>
        <hr />
        <p>a</p>
        </div>
        // <div className="card">
        // <img src={image} alt={character} />
        // <h2>{character}</h2>
        // <hr />
        // <p>{quote}</p>
        // </div>
    )
}



// import React from "react";
// import '../Card/Card.css';
// // import { data } from "../Layout/Main/Main"


// export const Card=(data)=>{
//     const { character, image, quote } = data.data;
//     return (
//         <section className="Card">
//             <p>{character}</p>
//             <img src={image} alt={character}/>
//             <p>{quote}</p>
//         </section>
//     )
// }