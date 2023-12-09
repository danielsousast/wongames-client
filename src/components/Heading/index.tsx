import * as S from './styles'

export interface HeadingProps {
  children: string
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper $color={color} $lineLeft={lineLeft} $lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)
