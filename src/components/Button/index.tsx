import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  $fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      size={size}
      $fullWidth={$fullWidth}
      $hasIcon={!!icon}
      $minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.ButtonWrapper>
  )
}

export default Button
