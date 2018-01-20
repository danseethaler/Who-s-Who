import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Button, Icon} from 'semantic-ui-react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import {shuffle} from '@danseethaler/ut'

import {Spacer} from '../Components/Bits'
import {
  SortableAvatarList,
  SortableAvatar,
  ProfileItemList,
  ProfileItem,
} from './StyledComponents'

const SortableItem = SortableElement(
  ({nameFirst, headshot: {url, alt}, bounceDemo}) => (
    <SortableAvatar
      src={url}
      alt={alt}
      className={bounceDemo ? 'sort-bounce' : ''}
    />
  )
)

const SortableList = SortableContainer(({items, index: parentIndex}) => {
  return (
    <SortableAvatarList>
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          bounceDemo={parentIndex === 0 && index === 0}
          {...item}
        />
      ))}
    </SortableAvatarList>
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
    const {peeking, index} = this.props
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
            index={index}
            onSortEnd={this.onSortEnd}
            lockAxis="y"
          />
          <ProfileItemList>
            {this.state.options.map(
              ({id, firstName, lastName, jobTitle}, index) => {
                let correct = this.state.shuffledOptions[index].id === id

                return (
                  <ProfileItem key={id}>
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
                  </ProfileItem>
                )
              }
            )}
          </ProfileItemList>
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
