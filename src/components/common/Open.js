import React from 'react'
import PropTypes from 'prop-types'

class Open extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: this.props.defaultOpen }
  }
  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      close: this.close,
      open: this.open,
      toggle: this.toggle
    })
  }
  close = () => this.setState({ isOpen: false })
  open = () => this.setState({ isOpen: true })
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
}

Open.propTypes = {
  defaultOpen: PropTypes.bool
}

Open.defaultProps = {
  defaultOpen: false
}

export default Open
