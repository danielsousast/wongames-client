import { screen } from '@testing-library/react'
import 'jest-styled-components'
import Logo from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
})
