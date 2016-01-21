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

// sender.propTypes = {
//   completedCount: PropTypes.number.isRequired,
//   activeCount: PropTypes.number.isRequired,
//   filter: PropTypes.string.isRequired,
//   onClearCompleted: PropTypes.func.isRequired,
//   onShow: PropTypes.func.isRequired
// }

export default Sender
