import React, { useState } from "react";
import { Card } from "../../UI/Card/Card"

export const Main = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const [data, setData] = useState(data);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            // console.log(data.results[0].name);
        });
    return (

        <Card data={data}/>
    )
}