import { screen } from '@testing-library/react'
import 'jest-styled-components'
import { HeadingProps, Heading } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

type Props = Omit<HeadingProps, 'children'>

const makeSut = ({
  lineBottom = false,
  lineLeft = false,
  color = 'white',
  size = 'medium'
}: Props) =>
  renderWithTheme(
    <Heading
      size={size}
      lineBottom={lineBottom}
      lineLeft={lineLeft}
      color={color}
    >
      Won Games
    </Heading>
  )

describe('<Logo />', () => {
  it('should render a white heading by default', () => {
    makeSut({})
    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    makeSut({
      color: 'black'
    })
    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with left line', () => {
    makeSut({
      lineLeft: true
    })
    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with bottom line', () => {
    makeSut({
      lineBottom: true
    })
    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    makeSut({
      size: 'small',
      lineBottom: true
    })
    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', {
        name: /won games/i
      })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a primary line color', () => {
    makeSut({
      lineBottom: true,
      lineLeft: true
    })
    const heading = screen.getByRole('heading', {
      name: /won games/i
    })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
    expect(heading).toHaveStyleRule('border-left', '0.7rem solid #F231A5')
  })
})
