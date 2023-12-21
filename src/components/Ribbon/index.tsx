import * as S from './styles'

export interface RibbonProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  size?: 'normal' | 'small'
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)
