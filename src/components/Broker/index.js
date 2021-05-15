import {Component} from 'react'
import mqtt from 'mqtt'

import './index.css'

const connectionSettings = {topic: 'presence'}
const options = {
  protocol: 'mqtts',
  clientId: '99224559',
}
class Broker extends Component {
  state = {
    // brokerUrl: 'mqtt://test.mosquitto.org:8081',
    brokerUrl: '',
    // listener: '',
    message: '',
    client: '',
  }

  onConnect = async event => {
    event.preventDefault()
    const {brokerUrl} = this.state
    const response = await mqtt.connect(brokerUrl, options)
    this.setState({client: response})
  }

  onPublish = event => {
    event.preventDefault()
    const {client} = this.state
    client.on('connect', () => {
      const {message} = this.state
      client.publish(connectionSettings.topic, message)
      this.setState({message: ''})
    })
  }

  onChangeMessage = event => {
    this.setState({message: event.target.value})
  }

  onChangeBrokerUrl = event => {
    this.setState({brokerUrl: event.target.value})
  }

  render() {
    const {message} = this.state
    return (
      <div className="container">
        <form onSubmit={this.onConnect}>
          <h1>Broker Address</h1>
          <div className="inset">
            <label htmlFor="email">Broker ADDRESS</label>
            <input type="text" id="email" onChange={this.onChangeBrokerUrl} />
          </div>
          <p className="p-container">
            <span>Forgot password ?</span>
            <input type="submit" id="go" value="Connect" />
          </p>
        </form>
        <form onSubmit={this.onPublish}>
          <h1>Publisher</h1>
          <div className="inset">
            <p>
              <label htmlFor="email">Message</label>
              <input
                type="text"
                id="email"
                value={message}
                onChange={this.onChangeMessage}
              />
            </p>
          </div>
          <p className="p-container">
            <span>Forgot password ?</span>
            <input type="submit" id="go" value="Publish" />
          </p>
        </form>
      </div>
    )
  }
}

export default Broker
