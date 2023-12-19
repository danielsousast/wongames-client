import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import Logo from '../Logo'
import * as S from './styles'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenCloseMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" onClick={handleOpenCloseMenu} />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={handleOpenCloseMenu} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>
        </S.MenuNav>
      </S.FullMenu>
    </S.Wrapper>
  )
}
