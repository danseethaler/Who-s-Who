import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Divider, Button, Icon} from 'semantic-ui-react'
import SwipeableViews from 'react-swipeable-views'
import {shuffle, random} from '@danseethaler/ut'

import Iteration from './Iteration'
import './game.css'
import {Spacer} from '../Components/Bits'
import {duration} from '../config'
import Confetti from './Confetti'

const Timer = () => (
  <div>
    <div
      className="timer-bar"
      style={{animation: `timer ${duration}s linear`}}
    />
    <div className="timer-bar-base" />
  </div>
)

const greatJob = {
  emoji: '🎉',
  header: 'great job!',
  response: [
    'You are a real people person.',
    'You must have been practicing.',
    'Have you been studying in your freetime?',
  ],
}

const needsWork = {
  emoji: '😕',
  header: 'hmmm...',
  response: ['Time for some face to face.', 'Maybe start with the directory.'],
}

const Summary = ({correct, attempts, startOver}) => {
  const {emoji, response, header} = correct < 10 ? needsWork : greatJob

  return (
    <Spacer size="medium">
      <Confetti />
      <Container textAlign="center">
        <Header as="h2" icon>
          <span
            style={{display: 'block', fontSize: '2em', margin: 20}}
            role="img"
            aria-label="party"
          >
            {emoji}
          </span>
          {correct} points - {header}
          <Header.Subheader>{random(response)}</Header.Subheader>
        </Header>
        <Spacer size="small">
          <Divider horizontal>Play Again?</Divider>
        </Spacer>
        <Button onClick={startOver} color="blue" icon labelPosition="left">
          <Icon name="repeat" />
          Replay
        </Button>
      </Container>
    </Spacer>
  )
}

const PeekingToggle = ({peeking, onToggle}) => (
  <Header
    as="h4"
    style={{
      width: 300,
      margin: 'auto',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-end',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    }}
    onClick={onToggle}
  >
    <Icon
      size="large"
      name="eye"
      color={peeking ? 'blue' : 'grey'}
      disabled={!peeking}
    />
    <Header.Content
      style={{
        paddingTop: 2,
        color: '#aaa',
        paddingLeft: 2,
      }}
    >
      Peek
    </Header.Content>
  </Header>
)

const sliceSize = 4

class Game extends Component {
  initialState = {
    correct: 0,
    attempts: 0,
    viewIndex: 0,
    finished: false,
    peeking: false,
  }

  timeout = null

  state = this.initialState

  componentDidMount() {
    this.startOver()
  }

  recordIteration = ({correct, attempts}) => {
    this.setState(
      ({correct: currentCorrect, attempts: currentAttempts, viewIndex}) => {
        let finished = false
        if (viewIndex + 1 >= Math.ceil(this.props.users.length / sliceSize)) {
          finished = true
        }

        return {
          correct: currentCorrect + correct,
          attempts: currentAttempts + attempts,
          viewIndex: viewIndex + 1,
          finished,
          peeking: false,
        }
      }
    )
  }

  startOver = () => {
    this.setState(this.initialState)

    setTimeout(() => {
      this.setState({finished: true})
    }, duration * 1000)
  }

  togglePeeking = () => {
    const peek = !this.state.peeking
    if (this.timeout) clearTimeout(this.timeout)

    if (peek) {
      setTimeout(() => {
        this.timeout = this.setState({peeking: false})
      }, 1500)
    }

    this.setState({peeking: peek})
  }

  render() {
    const users = shuffle(this.props.users, true)
    if (!users.length) return null

    const userChunks = []
    while (users.length) {
      userChunks.push(users.splice(0, sliceSize))
    }

    const {finished, viewIndex, peeking} = this.state

    if (finished) {
      return <Summary startOver={this.startOver} {...this.state} />
    }

    return (
      <div>
        <Container>
          <Timer />
          <PeekingToggle peeking={peeking} onToggle={this.togglePeeking} />
          <SwipeableViews index={viewIndex}>
            {userChunks.map((users, index) => (
              <Iteration
                key={index}
                users={users}
                record={this.recordIteration}
                peeking={peeking}
              />
            ))}
          </SwipeableViews>
        </Container>
      </div>
    )
  }
}

Game.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Game
