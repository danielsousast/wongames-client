import { Home } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe(`<Home />`, () => {
  it(`should render menu and footer`, () => {
    const { container } = renderWithTheme(<Home />)
    expect(container.querySelector('#menu')).toBeInTheDocument()
    expect(container.querySelector('#footer')).toBeInTheDocument()
  })

  it(`should render sections`, () => {
    const { container } = renderWithTheme(<Home />)
    expect(container.querySelector('#news')).toBeInTheDocument()
    expect(container.querySelector('#upcoming')).toBeInTheDocument()
    expect(container.querySelector('#free-games')).toBeInTheDocument()
    expect(container.querySelector('#most-popular')).toBeInTheDocument()
  })
})
