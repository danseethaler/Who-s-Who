import React from 'react'
import {Header, Container, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router'

import {Spacer} from './Components/Bits'
import {colors} from './style'

const Home = ({history}) => (
  <Container>
    <Spacer size="large">
      <Header as="h2">
        Welcome to Who's Who<span style={{color: colors.accent}}>?</span>
        <Header.Subheader color="orange">
          Get to know you games and a company roster
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
