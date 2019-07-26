import React, { useEffect, useState } from "react";
import Axios from "axios";
// import { Dimmer, Loader} from 'semantic-ui-react'
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersData, setCharactersData] = useState({});

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharactersData(Array.from(response.data.results));
      })
      .catch(error => console.error(error));
  }, []);

  // if (!name) {
  //   return <Dimmer active inverted>
  //   <Loader inverted>Loading</Loader>
  // </Dimmer>}
  return (
    <section className="character-list grid-view">
      {charactersData &&
        Array.from(charactersData).map((item, key) => (
          <CharacterCard characterData={item} key={key} />
        ))}
    </section>
  );
}
