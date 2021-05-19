import {Component} from 'react'
import mqtt from 'mqtt'

import SideNavContainer from '../SideNav'
import './index.css'

const connectionSettings = {topic: 'presence'}
const options = {
  protocol: 'mqtts',
  clientId: '99224559',
}
// mqtt://test.mosquitto.org:8081,
class Publisher extends Component {
  state = {
    brokerUrl: '',
    message: '',
    sentMessagesList: [],
  }

  onPublish = async event => {
    event.preventDefault()
    const {message, sentMessagesList, brokerUrl} = this.state
    const updatedSentMessageList = sentMessagesList

    if (message !== '') {
      updatedSentMessageList.push({message})
      this.setState({
        sentMessagesList: updatedSentMessageList,
      })
    }

    const client = await mqtt.connect(brokerUrl, options)
    client.on('connect', () => {
      client.publish(connectionSettings.topic, message)
      this.setState({message: ''})
    })

    client.end()
  }

  onChangeMessage = event => {
    this.setState({message: event.target.value})
  }

  onChangeBrokerUrl = event => {
    this.setState({brokerUrl: event.target.value})
  }

  render() {
    const {sentMessagesList} = this.state
    console.log(sentMessagesList)
    return (
      <div>
        <form className="publisher-container" onSubmit={this.onPublish}>
          <h1>Publisher</h1>
          <div className="broker-container">
            <input
              type="text"
              id="brokerAddress"
              onChange={this.onChangeBrokerUrl}
              placeholder="test.mosquitto.org"
            />
            <input type="text" id="topic" placeholder="Enter Topic" />
          </div>
          <div className="message-list">
            {sentMessagesList.map(eachMsg => (
              <p className="message-box" key={eachMsg.id}>
                {eachMsg.message}
              </p>
            ))}
          </div>
          <div className="inset">
            <input
              type="text"
              id="message"
              placeholder="Type Here..."
              onChange={this.onChangeMessage}
            />
            <button type="submit" id="go">
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Publisher
