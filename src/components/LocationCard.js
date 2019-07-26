import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard(props) {
  // image={image}
  const { name, type, dimension, residents } = props.locationData;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <span>{name}</span>
        </Card.Header>
        <Card.Meta>
        Type: {type}
        </Card.Meta>
        <Card.Description>
          Dimension: {dimension}
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='user' />
        {residents.length}
      </a>
    </Card.Content>
    </Card>
  );
}
