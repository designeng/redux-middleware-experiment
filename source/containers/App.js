import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ApiActions from '../actions/api'
import ServerApiMonitor from '../components/ServerApiMonitor'


class App extends Component {
  render() {
    const { actions } = this.props
    console.log(actions);
    return (
      <div>
        <div>ServerApiMonitor:</div>
        <ServerApiMonitor actions={actions} />
        <div>app</div>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ApiActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
