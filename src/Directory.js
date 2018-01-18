import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Dropdown,
  Input,
  Header,
  Icon,
  Divider,
} from 'semantic-ui-react'

import UserCard from './UserCard'
import {Spacer, Colorize} from './Components/Bits'

const options = [
  {key: 'name', text: 'Name', value: 'name'},
  {key: 'position', text: 'Job Title', value: 'position'},
]

const compareStrings = (a, b) => a.toLowerCase().includes(b.toLowerCase())

const KeepSearching = ({loading}) =>
  loading ? null : (
    <Spacer size="micro">
      <Header as="h3" icon disabled color="orange">
        <Icon name="search" />
        Keep Searching...
        <Header.Subheader>No one matches your search</Header.Subheader>
      </Header>
    </Spacer>
  )

class Directory extends Component {
  state = {
    search: '',
    searchCategory: 'name',
  }

  // const positions = users
  // .map(({jobTitle}) => jobTitle)
  // .filter(isUnique)
  // .sort()

  render() {
    const {loading} = this.props
    const users = this.props.users.filter(
      ({firstName = '', lastName = '', jobTitle = ''}) => {
        if (!this.state.search) {
          return true
        }
        if (this.state.searchCategory === 'name') {
          return compareStrings(firstName + lastName, this.state.search)
        }
        return jobTitle.toLowerCase().includes(this.state.search.toLowerCase())
      }
    )

    return (
      <div>
        <Container textAlign="center" style={{margin: '10px 0'}}>
          <Spacer size="large">
            <Header as="h2">
              Find who you're looking for
              <Header.Subheader>
                Search the entire company roster by name or position
              </Header.Subheader>
            </Header>
          </Spacer>
          <Divider horizontal>
            <Colorize color="accent">Meet Our Team</Colorize>
          </Divider>
          <Spacer size="small">
            <Input
              onChange={({target: {value: search}}) => {
                this.setState({search})
              }}
              action={
                <Dropdown
                  button
                  basic
                  floating
                  options={options}
                  value={this.state.searchCategory}
                  onChange={(e, {value: searchCategory}) => {
                    this.setState({searchCategory})
                  }}
                />
              }
              value={this.state.search}
              icon="search"
              iconPosition="left"
              placeholder="Search..."
            />
            <Container>
              <Spacer
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
                size="micro"
              >
                {users.length ? (
                  users.map(user => <UserCard key={user.id} {...user} />)
                ) : (
                  <KeepSearching loading={loading} />
                )}
              </Spacer>
            </Container>
          </Spacer>
        </Container>
      </div>
    )
  }
}

Directory.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Directory
