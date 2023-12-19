import * as S from './styles'

export interface HeadingProps {
  children: string
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColor?: 'primary' | 'secondary'
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    $color={color}
    $lineLeft={lineLeft}
    $lineBottom={lineBottom}
    $size={size}
    $lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)
