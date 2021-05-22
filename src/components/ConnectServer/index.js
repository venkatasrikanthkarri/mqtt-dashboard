/* eslint-disable prettier/prettier */
import {Component} from 'react'
import mqtt from 'mqtt'

import ConnectServerCSS from './index.module.css'

const options = {
  protocol: 'mqtts',
  clientId: '99224559',
}
// mqtt://test.mosquitto.org:8081,
class ConnectServer extends Component {
  state = {
    brokerUrl: '',
    topic: '',
  }

  onConnect = async event => {
    event.preventDefault()
    const {topic, brokerUrl} = this.state
    const client = await mqtt.connect(brokerUrl, options)
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  onChangeBrokerUrl = event => {
    this.setState({brokerUrl: event.target.value})
  }

  render() {
    return (
      <form
        className={ConnectServerCSS.publisherContainer}
        onSubmit={this.onConnect}
      >
        <input
          type="text"
          id="brokerAddress"
          onChange={this.onChangeBrokerUrl}
          placeholder="test.mosquitto.org"
        />
        <input type="text" id="topic" placeholder="Enter Topic" />
        <button type="button" id="go">
          Send
        </button>
      </form>
    )
  }
}

export default ConnectServer
