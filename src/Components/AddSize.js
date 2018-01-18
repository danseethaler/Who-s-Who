import {Component} from 'react'
import PropTypes from 'prop-types'

import {getSize} from '../utils'

class AddSize extends Component {
  state = this.getDimensions()

  componentDidMount() {
    window.addEventListener('resize', this.setDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions)
  }

  getDimensions() {
    return {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    }
  }

  setDimensions = () => {
    this.setState(this.getDimensions())
  }

  render() {
    const size = getSize(this.state.width)

    return this.props.children({
      size,
      mobile: size === 'phone',
      dims: this.state,
    })
  }
}

AddSize.propTypes = {
  children: PropTypes.func.isRequired,
}

export default AddSize
