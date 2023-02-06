import { render, screen } from '@testing-library/react'
import Header from '../components/header/Header'

describe('check the available component', () => {
  it('render the header', () => {
    render(<Header label={'Test Header'} />)
    const headerElement = screen.getByText(/test header/i)
    expect(headerElement).toBeVisible()
  })
})
