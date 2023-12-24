import { fireEvent, screen } from '@testing-library/react'
import { GameCard } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  title: 'GameCard Title',
  developer: 'Rockstar Games',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText(props.price)
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="200" />)

    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite is clicked', () => {
    const onFavorite = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFavorite={onFavorite} />)
    expect(onFavorite).not.toHaveBeenCalled()
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFavorite).toHaveBeenCalledTimes(1)
  })
})
