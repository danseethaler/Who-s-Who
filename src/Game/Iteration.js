import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Button, Icon} from 'semantic-ui-react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import {shuffle} from '@danseethaler/ut'

import {Spacer} from '../Components/Bits'

const SortableItem = SortableElement(
  ({sortIndex, nameFirst, headshot: {url, alt}}) => (
    <img
      src={url}
      alt={alt}
      className={'sortable-avatar ' + (sortIndex === 0 ? 'sort' : '')}
    />
  )
)

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="sortable-list">
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          sortIndex={index}
          {...item}
        />
      ))}
    </div>
  )
})

class Iteration extends Component {
  constructor(props) {
    super(props)

    const options = shuffle(props.users, true)
    this.state = {
      options,
      shuffledOptions: shuffle(options, true),
    }
  }

  movingOn = () => {
    const {options, shuffledOptions} = this.state

    const correct = options.reduce((correct, item, index) => {
      if (item.id === shuffledOptions[index].id) {
        correct++
      }
      return correct
    }, 0)

    this.props.record({correct, attempts: options.length})
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const shuffledOptions = arrayMove(
      this.state.shuffledOptions,
      oldIndex,
      newIndex
    )
    this.setState({shuffledOptions})
  }

  render() {
    const {peeking} = this.props
    return (
      <Container style={{width: 300}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SortableList
            items={this.state.shuffledOptions}
            onSortEnd={this.onSortEnd}
            lockAxis="y"
          />
          <div style={{marginLeft: 18}}>
            {this.state.options.map(
              ({id, firstName, lastName, jobTitle}, index) => {
                let correct = this.state.shuffledOptions[index].id === id

                return (
                  <div
                    key={id}
                    style={{
                      display: 'flex',
                      height: 80,
                      paddingTop: 20,
                      flexGrow: 1,
                      marginBottom: 8,
                    }}
                  >
                    <Header as="h4">
                      {firstName} {lastName}
                      <Header.Subheader>{jobTitle}</Header.Subheader>
                      {peeking ? (
                        <Icon
                          name={correct ? 'check' : 'dont'}
                          color={correct ? 'green' : 'red'}
                          disabled={!correct}
                        />
                      ) : null}
                    </Header>
                  </div>
                )
              }
            )}
          </div>
        </div>

        <Spacer size="small">
          <Button fluid onClick={this.movingOn}>
            Next
          </Button>
        </Spacer>
      </Container>
    )
  }
}

Iteration.propTypes = {
  users: PropTypes.array.isRequired,
  record: PropTypes.func.isRequired,
}

export default Iteration
