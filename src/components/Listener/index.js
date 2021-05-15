import {Component} from 'react'
import mqtt from 'mqtt'

import './index.css'

const connectionSettings = {topic: 'presence'}
const options = {
  protocol: 'mqtts',
  clientId: '99224559',
}
class Listner extends Component {
  state = {
    // ListnerUrl: 'mqtt://test.mosquitto.org:8081',
    brokerUrl: '',
    listener: '',
    connectionStatus: '',
  }

  checkStatus = client => {
    // const {client} = this.props
    console.log(client)
    client.on('connect', () => {
      this.setState({connectionStatus: 'connected'})
    })
    client.on('error', err => {
      this.setState({connectionStatus: err})
      client.end()
    })
    client.on('reconnect', () => {
      this.setState({connectionStatus: 'Reconnecting'})
    })
  }

  onSubscribe = async event => {
    event.preventDefault()
    const {brokerUrl} = this.state
    const client = await mqtt.connect(brokerUrl, options)
    this.checkStatus(client)
    client.subscribe(connectionSettings.topic)
    client.on('message', (topic, message) => {
      this.setState({listener: message.toString()})
    })
  }

  onChangeBrokerUrl = event => {
    this.setState({brokerUrl: event.target.value})
  }

  render() {
    const {listener, connectionStatus} = this.state
    return (
      <div className="container">
        <form onSubmit={this.onSubscribe}>
          <p>{connectionStatus}</p>
          <h1>Broker Address</h1>
          <div className="inset">
            <label htmlFor="email">Broker ADDRESS</label>
            <input type="text" id="email" onChange={this.onChangeBrokerUrl} />
          </div>
          <p className="p-container">
            <span>Forgot password ?</span>
            <input type="submit" id="go" value="Subscribe" />
          </p>
          <h1>Listener</h1>
          <div className="inset">
            <label htmlFor="email">Listener</label>
            <textarea
              rows="10"
              cols="30"
              type="text"
              id="email"
              value={listener}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Listner
