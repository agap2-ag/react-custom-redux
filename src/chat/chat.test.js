import React from 'react'
import { render } from '@testing-library/react'
import Chat from './chat'

/* eslint-disable no-undef */
test('renders Chat', () => {
  const { getByText } = render(<Chat />)
  const linkElement = getByText(/Flow-chats/i)
  expect(linkElement).toBeInTheDocument()
})
/* eslint-enable no-undef */
