import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Home'
import Directory from './Directory'
import Menu from './Menu'
import NoMatch from './NoMatch'
import {hasValidImage} from './utils'

class Item extends Component {
  state = {
    users: [],
    loading: true,
  }
  componentDidMount() {
    this.updateUsers()
  }

  updateUsers = () => {
    axios
      .get('https://willowtreeapps.com/api/v1.0/profiles/')
      .then(({data: users}) => {
        this.setState({users: users.filter(hasValidImage), loading: false})
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
              render={() => <Directory {...this.state} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Item
