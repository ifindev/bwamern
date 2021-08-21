import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './index'

test('Should have btn-primary class if isPrimary present in props', () => {
  const { container } = render(<Button isPrimary></Button>)
  expect(container.firstChild).toHaveClass('btn-primary')
})

test('Should have btn-lg class if isLarge present in props', () => {
  const { container } = render(<Button isLarge></Button>)
  expect(container.firstChild).toHaveClass('btn-lg')
})

test('Should have btn-sm class if isSmall present in props', () => {
  const { container } = render(<Button isSmall></Button>)
  expect(container.firstChild).toHaveClass('btn-sm')
})

test('Should have btn-block class if isBlock present in props', () => {
  const { container } = render(<Button isBlock></Button>)
  expect(container.firstChild).toHaveClass('btn-block')
})

test('Should not allowed click button if isDisabled is present in props', () => {
  const { container } = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('Should render loading/spinner if isLoading preset in props', () => {
  const { container, getByText } = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()

  expect(container.querySelector('span')).toBeInTheDocument()
})

test('Should render <a> tag if isExternal preset in props', () => {
  const { container } = render(<Button type="link" isExternal></Button>)

  expect(container.querySelector('a')).toBeInTheDocument()
})

test('Should render <Link> component if button type link and isExternal not preset in props', () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  )

  expect(container.querySelector('a')).toBeInTheDocument()
})
