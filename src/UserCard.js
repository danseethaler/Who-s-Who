import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const UserCard = ({firstName, lastName, headshot: {url}, jobTitle}) => (
  <Card>
    <Image
      src={url}
      fluid
      style={{width: 290, height: 290, objectFit: 'cover'}}
    />
    <Card.Content>
      <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
      <Card.Description>{jobTitle || '-'}</Card.Description>
    </Card.Content>
  </Card>
)

export default UserCard
