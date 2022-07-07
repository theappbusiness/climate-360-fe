import { render, screen } from '@testing-library/react'
import { NavMenu } from './nav-menu'

describe('NavMenu', () => {
  it('renders a list of links', () => {
    const items = [
      { name: 'Learn', to: '/learn' },
      { name: 'Carbon footprint', to: '/calculate-co2' },
      { name: 'Get help', to: 'help' },
    ]
    render(<NavMenu isOpen={false} items={items} />)
    const links = screen.getAllByRole<HTMLLinkElement>('link')
    links.forEach((link, i) => {
      expect(link.href).toMatch(items[i].to)
      expect(link.textContent).toBe(items[i].name)
    })
  })
})
