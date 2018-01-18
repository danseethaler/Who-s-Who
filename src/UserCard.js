import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import {colors} from './style'

const UserCard = ({firstName, lastName, headshot: {url}, jobTitle}) => (
  <Card
  // style={{
  //   width: '20%',
  //   marginRight: 10,
  // }}
  >
    <Image
      src={url + '?h=250'}
      fluid
      style={{width: 290, height: 290, objectFit: 'cover'}}
    />
    <Card.Content>
      <Card.Header
        color={colors.accent}
      >{`${firstName} ${lastName}`}</Card.Header>
      {/* <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta> */}
      <Card.Description>{jobTitle || '-'}</Card.Description>
    </Card.Content>
    <Card.Content
      extra
      onClick={() => {
        console.log('click')
      }}
    >
      <a>
        <Icon name="heart" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

// const UserCard = ({firstName, lastName, headshot: {url}, jobTitle}) => (
//   <img
//     style={{width: 250, height: 250, margin: 20, objectFit: 'cover'}}
//     src={url + '?h=250'}
//   />
// )

export default UserCard
