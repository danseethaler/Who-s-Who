import React from 'react'
import {Header, Container, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router'

import {Spacer} from './Components/Bits'
import {Colorize} from './Components/Bits'

const Home = ({history}) => (
  <Container>
    <Spacer size="large">
      <Header as="h2">
        Welcome to Who's Who<Colorize>?</Colorize>
        <Header.Subheader color="orange">
          WillowTree company roster with a game
        </Header.Subheader>
      </Header>
    </Spacer>

    <Button
      primary
      onClick={() => {
        history.push('/game')
      }}
    >
      Game
    </Button>
    <Button
      secondary
      onClick={() => {
        history.push('/directory')
      }}
    >
      Directory
    </Button>
  </Container>
)

export default withRouter(Home)
