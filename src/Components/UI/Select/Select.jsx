import React, { useState } from 'react';
import './Select.css';


export const Select=()=> {
  const [datal,setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character' 
  fetch(url)
  .then(response => response.json())
  .then(data=>setCharacters(data.results));
  return(
    <>
    <header>
      <select name="Select" id="Select">
        <option value="">select a character</option>
        <option value="">All characters</option>
        {
          datal.map((option)=>(
              <option value={option.id}>{option.name}</option>
          ))
        }
      </select>
    </header>
    </>
  )
}