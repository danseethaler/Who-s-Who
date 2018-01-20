import React, {Component} from 'react'
import {Header, Container} from 'semantic-ui-react'

import {
  SortableAvatar,
  ProfileItem,
  SortableAvatarList,
  ProfileItemList,
} from './StyledComponents'

class Preview extends Component {
  render() {
    return (
      <Container
        style={{
          width: 300,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SortableAvatarList previewOnly>
          <SortableAvatar
            src="//images.contentful.com/3cttzl4i3k1h/5PO8DVEsg0Wyo0iGcOq0Ui/e2eba7ff32d34bc4f64676861cf8328d/IMG_1057.jpg?h=250"
            alt="Abby Cook, Controller at WillowTree, Inc."
            swapDown
          />
          <SortableAvatar
            src="//images.contentful.com/3cttzl4i3k1h/5TtGDrZNAcm6oW6IGCQkAS/fee51f9b150c300afbbb742a6de1b4d0/IMG_4515-363.jpg?h=250"
            alt="Tobias Dengel, CEO of WillowTree, Inc."
            swapUp
          />
        </SortableAvatarList>
        <ProfileItemList>
          <ProfileItem>
            <Header as="h4">
              Tobias Dengel
              <Header.Subheader>CEO</Header.Subheader>
            </Header>
          </ProfileItem>
          <ProfileItem>
            <Header as="h4">
              Abby Cook
              <Header.Subheader>Controller</Header.Subheader>
            </Header>
          </ProfileItem>
        </ProfileItemList>
      </Container>
    )
  }
}

export default Preview
