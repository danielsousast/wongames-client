import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { BannerSlider } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  items: [
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x580',
      title: 'Defy death 1',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death',
      ribbon: 'Bestselling'
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x581',
      title: 'Defy death 2',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    }
  ]
}

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider {...props} />)
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider {...props} />)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(screen.queryByText(/Defy death 1/i)).toBeInTheDocument()
  })
})
