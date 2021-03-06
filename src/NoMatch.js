import React from 'react'
import {Header, Container, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import {Spacer, Colorize} from './Components/Bits'

const NoMatch = ({history}) => (
  <Container>
    <Spacer size="large">
      <Header as="h2">
        Oops... This page does not exist<Colorize>.</Colorize>
        <Header.Subheader color="orange">
          Take a deep breath and remember, today is a great day.
        </Header.Subheader>
      </Header>
    </Spacer>
    <Button
      onClick={() => history.push('/')}
      labelPosition="left"
      color="blue"
      icon="home"
      content="Head home"
    />
  </Container>
)

export default withRouter(NoMatch)
