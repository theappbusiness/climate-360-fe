import { fireEvent, render, screen } from '@testing-library/react'
import { NavMenuToggle } from './nav-menu-toggle'

describe('NavMenuToggle', () => {
  it('renders a button', () => {
    render(<NavMenuToggle isOpen={false} onClick={jest.fn()} />)
    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
  })

  it('calls the given onClick when clicked', () => {
    const mockHandleClick = jest.fn()
    render(<NavMenuToggle isOpen={false} onClick={mockHandleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
