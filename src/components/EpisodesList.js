import React, { useEffect, useState } from 'react';
import Axios from "axios"
import EpisodeCard from './EpisodeCard'


export default function EpisodesList() {
  const [episodesData, setEpisodesData] = useState({})

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
    .then(response => {
      setEpisodesData(response.data.results)
    })
    .catch(error => console.error(error))
  }, [])

  return (
     <section className="grid-view">
    {episodesData && Array.from(episodesData).map((item, key) => <EpisodeCard episodeData={item} key={key} />)}
  </section>
  )
}
