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
    brokerUrl: 'mqtt://test.mosquitto.org:8081',
    listener: '',
    message: '',
  }

  onConnect = event => {
    event.preventDefault()
    const {brokerUrl} = this.state

    const client = mqtt.connect(brokerUrl, options)
  }

  onPublish = event => {
    event.preventDefault()
    const {brokerUrl} = this.state

    const client = mqtt.connect(brokerUrl, options)
    console.log('client', client)
    client.on('connect', () => {
      const {message} = this.state
      client.subscribe(connectionSettings.topic, err => {
        if (!err) {
          client.publish(connectionSettings.topic, message)
        }
      })
    })

    client.on('message', (topic, message) => {
      this.setState({listener: message.toString()})
      client.end()
    })
  }

  onChangeMessage = event => {
    this.setState({message: event.target.value})
  }

  onChangeBrokerUrl = event => {
    this.setState({brokerUrl: event.target.value})
  }

  render() {
    const {listener} = this.state
    return (
      <>
        <form onSubmit={this.onConnect}>
          <h1>Broker Address</h1>
          <div className="inset">
            <p>
              <label htmlFor="email">Broker ADDRESS</label>
              <input type="text" id="email" onChange={this.onChangeBrokerUrl} />
            </p>
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
              <input type="text" id="email" onChange={this.onChangeMessage} />
            </p>
          </div>
          <p className="p-container">
            <span>Forgot password ?</span>
            <input type="submit" id="go" value="Publish" />
          </p>
        </form>
        <form>
          <h1>Listener</h1>
          <div className="inset">
            <p>
              <label htmlFor="email">Listener</label>
              <input type="text" id="email" value={listener} />
            </p>
          </div>
        </form>
        {/* <p className="response-heading">{listener}</p>
        <h1 className="response-heading">Response</h1> */}
      </>
    )
  }
}

export default Broker
