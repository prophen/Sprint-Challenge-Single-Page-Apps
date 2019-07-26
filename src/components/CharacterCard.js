import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  const { name, status, species, image} = props.characterData
  return (
  <Card>
        <Image src={image} wrapped ui={false} />

    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description><p>Status: {status}</p>
      <p>Species: {species}</p></Card.Description>
    </Card.Content>
  </Card>
  )
}
