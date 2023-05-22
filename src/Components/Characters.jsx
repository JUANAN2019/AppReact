import React, {useEffect, useState} from 'react'
import './characters.css'
import { useParams } from 'react-router-dom'
import { uniqueCharacter } from './functions/Functions'
import '../Components/Main'

const CharacterList = () => {
  const [characters, setCharacters] = useState(null)

  const params = useParams()
  useEffect(()=>{
    uniqueCharacter(params.id, setCharacters)
  },[])
  
  return (
    <>
    {characters != null ? (
        <div className='Character'>
            <h2>Character Id: {params.id}</h2>
            <p>Character Name: {characters.name}</p>
            <p>Specie: {characters.specie}</p>
            <p>Gender: {characters.gender}</p>
            <p>Status: {characters.status}</p>
            <img src={characters.image} alt="" />
        </div>
  ) : ('there is no characters')} 
    </>
  )
}

export default CharacterList;
