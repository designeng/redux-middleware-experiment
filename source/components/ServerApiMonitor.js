import React, { PropTypes, Component } from 'react'
import ButtonPanel from '../components/ButtonPanel'

class ServerApiMonitor extends Component {
  render() {
    const { actions } = this.props
    return (
      <div>
        <ButtonPanel callApi={actions.callApi} />
      </div>
    )
  }
}

export default ButtonPanel
