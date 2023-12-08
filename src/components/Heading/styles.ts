import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

interface WrapperProps {
  color?: 'white' | 'black'
  lineLeft?: boolean
}

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, lineLeft }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.medium} 0;

    ${lineLeft && wrapperModifiers.lineLeft(theme)}

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
