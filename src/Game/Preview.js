import React, {Component} from 'react'
import {Header, Container} from 'semantic-ui-react'

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
        <div className="sortable-list">
          <img
            src="//images.contentful.com/3cttzl4i3k1h/5PO8DVEsg0Wyo0iGcOq0Ui/e2eba7ff32d34bc4f64676861cf8328d/IMG_1057.jpg?h=250"
            alt="Abby Cook, Controller at WillowTree, Inc."
            className="sortable-avatar swap-top"
          />
          <img
            src="//images.contentful.com/3cttzl4i3k1h/5TtGDrZNAcm6oW6IGCQkAS/fee51f9b150c300afbbb742a6de1b4d0/IMG_4515-363.jpg?h=250"
            alt="Tobias Dengel, CEO of WillowTree, Inc."
            className="sortable-avatar swap-bottom"
          />
        </div>
        <div className="sortable-list" style={{marginLeft: 18}}>
          <div className="sortable-preview-item">
            <Header as="h4">
              Tobias Dengel
              <Header.Subheader>CEO</Header.Subheader>
            </Header>
          </div>
          <div className="sortable-preview-item">
            <Header as="h4">
              Abby Cook
              <Header.Subheader>Controller</Header.Subheader>
            </Header>
          </div>
        </div>
      </Container>
    )
  }
}

export default Preview
