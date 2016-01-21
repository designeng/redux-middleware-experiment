import React, { PropTypes, Component } from 'react'

class ButtonPanel extends Component {

  onSendRequest() {
    console.log("on send request");
  }

  renderSendButton() {
    return (
      <button className="send-request"
              onClick={this.onSendRequest} >
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

export default ButtonPanel
