import React, { Component } from 'react'
import { MessagesGroup, MessagesLog } from './msgs'

export default class Chat extends Component {
  render () {
    return (
      <div className='root'>
        <MessagesLog />
        <h1 className='ui dividing centered header'>Flow-chats</h1>
        <div className='ui aligned page grid'>
          <MessagesGroup user='Abzu' theme='violet'>Subterranean</MessagesGroup>
          <MessagesGroup user='Tiamat' theme='teal'>Surface</MessagesGroup>
          <MessagesGroup user='Marduk' theme='blue'>Sky</MessagesGroup>
        </div>
      </div>
    )
  }
}
