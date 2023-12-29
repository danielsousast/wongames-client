import { Banner, BannerProps } from '../Banner'
import { Slider, SliderSettings } from '../Slider'
import * as S from './banner-slider.styles'

interface BannerSliderProps {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.BannerSliderWrapper>
    <Slider settings={settings}>
      {items?.map((item) => <Banner key={item.title} {...item} />)}
    </Slider>
  </S.BannerSliderWrapper>
)
