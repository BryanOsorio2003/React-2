import React from "react";
import './Select.css';
// const url = 'https://rickandmortyapi.com/api/character'    


// const personajes = [];
export const Select=()=> {
  
    return(
      <select name="Select" id="Select">
        <option value="">select a character</option>
        <option value="">All characters</option>
      </select>
    )
}