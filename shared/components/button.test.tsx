import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('calls the given onClick function when clicked', () => {
    const mockHandler = jest.fn()
    render(<Button onClick={mockHandler}>My button</Button>)
    const button = screen.getByText('My button')
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
