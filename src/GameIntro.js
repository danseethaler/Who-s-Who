import React from 'react'
import {Container, Header, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import GamePreview from './Game/Preview'
import AddSize from './Components/AddSize'
import {Spacer} from './Components/Bits'
import {duration} from './config'

const Game = ({history}) => (
  <AddSize>
    {({mobile}) => (
      <div>
        <Container textAlign="center" style={{margin: '10px 0'}}>
          <Spacer size={mobile ? 'small' : 'large'}>
            <Header as="h2">
              Match pictures with names.
              <Header.Subheader>
                Find out how well you know your team!
              </Header.Subheader>
            </Header>
          </Spacer>
        </Container>
        <GamePreview />
        <Container textAlign="center" style={{margin: '10px 0'}}>
          <Spacer size={mobile ? 'small' : 'large'}>
            <Header style={{paddingBottom: 12}} sub>
              You have {duration} seconds.
            </Header>
            <Button
              size="large"
              onClick={() => {
                history.push('/game/active')
              }}
              positive
            >
              Begin
            </Button>
          </Spacer>
        </Container>
      </div>
    )}
  </AddSize>
)

export default withRouter(Game)
