import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

interface WrapperProps {
  $color?: 'white' | 'black'
  $lineLeft?: boolean
  $lineBottom?: boolean
}

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, $color, $lineLeft, $lineBottom }) => css`
    color: ${theme.colors[$color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.medium} 0;

    ${$lineLeft && wrapperModifiers.lineLeft(theme)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme)}

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
