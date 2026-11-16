import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Counter Testing', () => {

  it('should show 0 initially', () => {
    render(<App />)

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should increase count', () => {
    render(<App />)

    fireEvent.click(screen.getByText('Add'))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

})