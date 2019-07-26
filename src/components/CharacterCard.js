import React from 'react'
import { Card } from 'semantic-ui-react'

export default function CharacterCard (props) {
  const { name, status, species} = props.characterData
  return (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>
  )
}
