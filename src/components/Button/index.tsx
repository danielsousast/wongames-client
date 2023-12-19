import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  $fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
