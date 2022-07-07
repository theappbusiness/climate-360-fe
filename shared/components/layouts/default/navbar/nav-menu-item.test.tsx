import { render, screen } from '@testing-library/react'
import { NavMenuItem } from './nav-menu-item'

describe('NavMenuItem', () => {
  it('renders a link', () => {
    render(<NavMenuItem to="/">Home</NavMenuItem>)
    const link = screen.getByRole('link')
    expect(link).toBeTruthy()
  })

  it('displays the given children', () => {
    render(<NavMenuItem to="/">Home</NavMenuItem>)
    const link = screen.getByRole('link')
    expect(link.textContent).toBe('Home')
  })

  it('links to the given destination', () => {
    render(<NavMenuItem to="/learn">Learn something new</NavMenuItem>)
    const link = screen.getByRole<HTMLLinkElement>('link')
    expect(link.href).toMatch('/learn')
  })
})
