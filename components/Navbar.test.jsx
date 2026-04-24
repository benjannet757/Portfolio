import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

test('navbar has links and they are clickable', async () => {
  render(<Navbar />)

  const aboutLink = screen.getByText(/about/i)

  expect(aboutLink).toBeInTheDocument()

  await userEvent.click(aboutLink)

  // You can later test navigation or scroll behavior
})