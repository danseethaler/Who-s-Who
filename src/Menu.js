import React from 'react'
import {withRouter} from 'react-router-dom'
import {Menu, Container} from 'semantic-ui-react'

import {Colorize} from './Components/Bits'

const routes = [
  {key: '/', name: 'Home'},
  {key: '/game', name: 'Game'},
  {key: '/directory', name: 'Directory'},
]

const TopMenu = ({history}) => (
  <Menu attached>
    <Container>
      <Menu.Item
        header
        onClick={() => {
          history.push('/')
        }}
      >
        Who's Who<Colorize>?</Colorize>
      </Menu.Item>
      <Menu.Menu position="right">
        {routes.map(({name, key}) => (
          <Menu.Item
            key={key}
            name={name}
            active={history.location.pathname === key}
            onClick={() => {
              history.push(key)
            }}
          >
            {name}
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Container>
  </Menu>
)

export default withRouter(TopMenu)
