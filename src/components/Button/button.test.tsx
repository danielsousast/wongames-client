import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from 'styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the medium sizew by defaut', () => {
    const { container } = renderWithTheme(<Button>Button</Button>)
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Button</Button>)
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Button</Button>)
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button $fullWidth>Button</Button>)
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an only icon version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.queryByText(/button/i)).not.toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button
      </Button>
    )
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })
    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'background',
      'none',
      { modifier: ':hover' }
    )
  })
})
