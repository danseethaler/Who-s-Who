import React from 'react'
import {css} from 'glamor'
import glamorous from 'glamorous'

const makeSwapKeyFrames = ({swapUp, swapDown}) => {
  if (swapUp || swapDown) {
    const keyframes = css.keyframes({
      '0%, 10%, 100%': {transform: 'translateY(0px)'},
      '20%, 90%': {transform: `translateY(${swapUp ? -88 : 88}px)`},
    })

    return {
      animation: `${keyframes} 5s linear infinite`,
    }
  }
  return null
}

export const SortableAvatar = glamorous.img(
  {
    zIndex: '100',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    marginBottom: '8px',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '40px',
  },
  makeSwapKeyFrames
)

export const SortableAvatarList = glamorous.div(
  'sortable-avatar-list',
  {
    display: 'flex',
    flexDirection: 'column',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  ({previewOnly}) =>
    previewOnly
      ? null
      : {
          cursor: '-webkit-grab',
        }
)

export const ProfileItemList = glamorous.div({
  marginLeft: 18,
})

export const ProfileItem = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-start',
  height: '80px',
  paddingTop: '24px',
  flexGrow: '1',
  marginBottom: '8px',
})

const timer = css.keyframes({
  '0%': {width: '0'},
  '100%': {width: '100%'},
})

const TimerBar = glamorous.div(
  {
    marginTop: '40px',
    borderTop: '1px solid rgba(255, 99, 71, 0.9)',
  },
  ({duration}) => ({
    animation: `${timer} ${duration}s linear`,
  })
)

const TimerBaseBar = glamorous.div({
  marginBottom: '40px',
  borderBottom: '1px solid #eee',
})

export const Timer = props => (
  <div>
    <TimerBar {...props} />
    <TimerBaseBar {...props} />
  </div>
)
