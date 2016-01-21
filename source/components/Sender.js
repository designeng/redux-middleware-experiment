import React, { PropTypes, Component } from 'react'

class Sender extends Component {

  renderSendButton() {
    return (
      <button className="send-request"
              onClick={onSendRequest} >
        Send
      </button>
    )
  }

  render() {
    return (
      <section className="sender">
        {this.renderSendButton()}
      </section>
    )
  }
}

export default Sender
