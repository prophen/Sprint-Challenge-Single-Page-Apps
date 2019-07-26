import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard(props) {
  // image={image}
  const { name, air_date, episode } = props.episodeData;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <span>{name}</span>
        </Card.Header>
        <Card.Meta>
        {episode}
        </Card.Meta>
        <Card.Description>

        Aired: {air_date}
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <i>
        <Icon name='user' />
    
      </i>
    </Card.Content>
    </Card>
  );
}
