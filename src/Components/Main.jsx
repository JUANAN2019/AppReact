import React, { useEffect, useState } from 'react'
import { allCharacters } from './functions/Functions'
import './Main.css'

const Main = () => {
    const[characters, setCharacters] = useState(null)

    useEffect(()=>{
        allCharacters(setCharacters)
    },[])

return (
<>
    {characters != null ? (
        characters.map(characters => (
        <div key={characters.id}>
            <a href={`/characters/${characters.id}`}>{characters.name}</a>
            <img src={characters.image} alt="" />
        </div>
        ))
    ) : ('there is no characters')}

</>
    )
}

export default Main