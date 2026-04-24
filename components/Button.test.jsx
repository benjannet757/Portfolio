import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

test('button click works', async () => {
  const handleClick = jest.fn()

  render(<Button onClick={handleClick}>Click me</Button>)

  await userEvent.click(screen.getByText(/click me/i))

  expect(handleClick).toHaveBeenCalled()
})