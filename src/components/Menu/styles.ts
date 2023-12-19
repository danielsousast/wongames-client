import styled, { css } from 'styled-components'
import { Diversity } from 'styled-icons/fluentui-system-filled'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    justify-content: space-between;
    width: 100%;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const FullMenu = styled.nav<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: ${theme.layers.menu};
    opacity: 1;

    ${!isOpen &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

    ${MenuGroup} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  `}
`

export const MenuLink = styled.a``

export const MenuNav = styled.div``
