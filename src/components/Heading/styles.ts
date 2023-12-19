import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

type LineColors = 'primary' | 'secondary'

interface WrapperProps {
  $color?: 'white' | 'black'
  $lineLeft?: boolean
  $lineBottom?: boolean
  $size?: 'small' | 'medium'
  $lineColor: LineColors
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lineLeft: (theme: DefaultTheme, $lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[$lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, $lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[$lineColor]};
    }
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, $color, $lineLeft, $lineBottom, $size, $lineColor }) => css`
    color: ${theme.colors[$color!]};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.medium} 0;
    ${$lineLeft && wrapperModifiers.lineLeft(theme, $lineColor)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme, $lineColor)}
    ${!!$size && wrapperModifiers[$size](theme)}
  `}
`
