import * as S from './styles'

export interface HeadingProps {
  children: string
  color?: 'white' | 'black'
  lineLeft?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
