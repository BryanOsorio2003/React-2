import React, { useState } from 'react';
import './Select.css';


export const Select=()=> {
  const [prueba,setCharacters] = useState([])
  function ApiSelect() {
    const url = 'https://rickandmortyapi.com/api/character' 
    fetch(url)
    .then(response => response.json())
    .then(data=>setCharacters(data.results));
  }
  ApiSelect()
  return(
    <>
    <header>
      <select name="Select" id="Select">
        <option value="">select a character</option>
        <option value="">All characters</option>
        {
          prueba.map(option=>(
              <option key={option.id} value={option.id}>{option.name}</option>
          ))
        }
      </select>
    </header>
    </>
  )
}