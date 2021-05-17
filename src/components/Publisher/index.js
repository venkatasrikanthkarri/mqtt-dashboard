import {Component} from 'react'
import mqtt from 'mqtt'

import './index.css'

const connectionSettings = {topic: 'presence'}
const options = {
  protocol: 'mqtts',
  clientId: '99224559',
}
class Publisher extends Component {
  state = {
    // brokerUrl: 'mqtt://test.mosquitto.org:8081',
    brokerUrl: '',
    // listener: '',
    message: '',
  }

  // onConnect = async event => {
  //   event.preventDefault()
  //   const {brokerUrl} = this.state
  //   const response = await mqtt.connect(brokerUrl, options)
  //   this.setState({client: response})
  // }

  onPublish = async event => {
    event.preventDefault()
    const {brokerUrl} = this.state
    const client = await mqtt.connect(brokerUrl, options)
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
      <div className="publisher-container">
        <form onSubmit={this.onPublish}>
          <h1>Publisher</h1>
          <div className="broker-container">
            <input
              type="text"
              id="brokerAddress"
              onChange={this.onChangeBrokerUrl}
              placeholder="Enter Broker Address"
            />
            <input type="text" id="topic" placeholder="Enter Topic" />
          </div>
          <div className="inset">
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              id="Message"
              value={message}
              onChange={this.onChangeMessage}
            />
            <input type="submit" id="go" value="Publish" />
          </div>
        </form>
      </div>
    )
  }
}

export default Publisher
