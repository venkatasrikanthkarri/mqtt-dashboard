import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
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

  onPublish = async event => {
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

  onClickCloseBtn = () => {
    const {onClickHamburgerMenu} = this.props
    onClickHamburgerMenu()
  }

  render() {
    const {isHamburberMenuOpened} = this.props
    const formWidth = isHamburberMenuOpened ? '600px' : '0px'
    return (
      <div
        className={ConnectServerCSS.connectServerContainerOn}
        style={{width: formWidth}}
      >
        <AiOutlineClose
          className={ConnectServerCSS.closeIcon}
          onClick={this.onClickCloseBtn}
        />
        <form
          onSubmit={this.onPublish}
          className={ConnectServerCSS.connectServerForm}
        >
          <input
            type="text"
            id="brokerAddress"
            onChange={this.onChangeBrokerUrl}
            placeholder="test.mosquitto.org"
          />
          <input
            type="text"
            id="topic"
            onChange={this.onChangeTopic}
            placeholder="Enter Topic"
          />
          <button type="submit" id="go">
            Connect
          </button>
        </form>
      </div>
    )
  }
}

export default ConnectServer
