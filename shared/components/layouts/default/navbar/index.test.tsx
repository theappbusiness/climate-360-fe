import { render } from '@testing-library/react'
import { Navbar } from '.'

describe('Navbar', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
