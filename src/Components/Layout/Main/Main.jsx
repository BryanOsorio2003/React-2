import React from "react";
import { Card } from "../../UI/Card/Card"
const url = 'https://rickandmortyapi.com/api/character'

export const Main = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            // console.log(data.results[0].name);
        });
    return (

        <Card />
    )
}



