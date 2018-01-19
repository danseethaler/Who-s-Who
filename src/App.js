import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {endpoint} from './config'
import Home from './Home'
import Directory from './Directory'
import GameIntro from './GameIntro'
import Game from './Game/index'
import Menu from './Menu'
import NoMatch from './NoMatch'
import {hasValidImage, isCurrentEmployee, standardizeImageSize} from './utils'

class Item extends Component {
  state = {
    users: [],
    loading: true,
  }
  componentDidMount() {
    this.updateUsers()
  }

  updateUsers = () => {
    axios.get(endpoint).then(({data: users}) => {
      this.setState({
        users: users
          .filter(hasValidImage)
          .filter(isCurrentEmployee)
          .map(standardizeImageSize),
        loading: false,
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/directory"
              exact
              render={() => <Directory {...this.state} />}
            />
            <Route exact path="/game" component={GameIntro} />
            <Route
              exact
              path="/game/active"
              render={() => <Game {...this.state} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Item
