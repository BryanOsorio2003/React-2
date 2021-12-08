import React, { useState } from 'react';
import './Select.css';


// const personajes = []; 

export const Select=()=> {
  const [data,setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character' 
  fetch(url)
  .then(response => response.json())
  .then(data=>setCharacters(data.results));
    return(

      <>
      <select name="Select" id="Select">
        <option value="">select a character</option>
        <option value="">All characters</option>
        {
          data.map((option)=>(
            <option value={option}>{option.name}</option>
          ))
        }
      </select>
      </>
      )
    }