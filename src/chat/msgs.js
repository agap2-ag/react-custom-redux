import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { store } from '../redux/store'

class MessagesInput extends Component {
  state = {value: ''} // eslint-disable-line

  handleChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    if (this.state.value.length) {
      store.dispatch({
        type: 'ADD_MESSAGE',
        message: {
          author: this.props.username,
          color: this.props.color,
          content: this.state.value
        }
      })
      this.setState({ value: '' })
    }
  }

  render () {
    const { username, color } = this.props
    return (
      <form className='ui labeled action fluid mini input' onSubmit={this.handleSubmit}>
        <label className='ui label'>{username}</label>
        <input
          type='text' placeholder='...'
          onChange={this.handleChange} value={this.state.value}
        />
        <button type='submit' className={'ui button mini ' + color}>
          <i className='arrow alternate circle down outline icon' />
        </button>
      </form>
    )
  }
}

class MessagesArea extends Component {
  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  handleDel = (i) => {
    store.dispatch({ type: 'DEL_MESSAGE', idx: i })
  }

  render () {
    const { messages } = store.getState()
    return (
      <>
        {messages.map((m, i) =>
          <div className={'ui message ' + m.color} key={i}>
            <i className='close icon' onClick={() => this.handleDel(i)} />
            <div className='header'>{m.author}</div>
            <p>{m.content}</p>
          </div>
        )}
      </>
    )
  }
}

class MessagesGroup extends Component {
  render () {
    const { user, theme, children } = this.props
    return (
      <section className='ui column five wide'>
        <h2>{children}</h2>
        <MessagesInput username={user} color={theme} />
        <MessagesArea />
      </section>
    )
  }
}

class MessagesLog extends Component {
  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  render () {
    const storeState = store.getState()
    return (
      <ReactJson
        src={storeState?.messages}
        name='Messages'
        collapsed
        displayDataTypes={false}
        indentWidth='2'
        iconStyle='circle'
        theme='ocean'
      />
    )
  }
}

export {
  MessagesGroup,
  MessagesLog
}
