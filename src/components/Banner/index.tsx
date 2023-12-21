import Button from '../Button'
import * as S from './styles'

export interface BannerProps {
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={image} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)
