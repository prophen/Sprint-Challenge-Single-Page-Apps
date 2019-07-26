import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersData, setCharactersData] = useState({})

  useEffect(() => {
   Axios.get('https://rickandmortyapi.com/api/character/')
   .then(response => {
     setCharactersData(Array.from(response.data.results))

     
   })
   .catch(error => console.error(error));
   
  }, [])

  const { name, status, species} = charactersData
  return (
  <section className='character-list grid-view'>
      {console.log('in return',charactersData)}
      <h2>TODO: `array.map()` over your state here!</h2>
      {charactersData && Array.from(charactersData).map (item => <CharacterCard characterData={item}/>)}
      
      
    </section>
  )

}
