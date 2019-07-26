import React, { useEffect, useState } from "react";
import Axios from "axios";
// import { Dimmer, Loader} from 'semantic-ui-react'
import LocationCard from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocationData(response.data.results);
      })
      .catch(error => console.error(error));
  }, []);

  // if (!name) {
  //   return <Dimmer active inverted>
  //   <Loader inverted>Loading</Loader>
  // </Dimmer>}
  return (
    <section className="grid-view">
      {locationData &&
        Array.from(locationData).map((item, key) => (
          <LocationCard locationData={item} key={key} />
        ))}
    </section>
  );
}
