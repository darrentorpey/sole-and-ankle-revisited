import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import { BREAKPOINTS } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileHolder>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} size={24} />
              <VisuallyHidden>Open shopping bag</VisuallyHidden>
            </UnstyledButton>

            <IconHolder>
              <Icon id="search" strokeWidth={2} size={24} />
              <VisuallyHidden>Search</VisuallyHidden>
            </IconHolder>

            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} size={24} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
          </MobileHolder>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header >
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.phoneMax}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const IconHolder = styled.div`
  position: relative;
`;

const MobileHolder = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    display: flex;
    gap: 32px;
    justify-content: right;
  }

  @media (max-width: ${BREAKPOINTS.phoneMax}px) {
    gap: 16px;
  }
`;

const Nav = styled.nav`
  flex: 1 1 100%;
  display: flex;
  gap: 48px;
  gap: clamp(
        1rem,
        calc(9.2vw - 4.5rem),
        3.5rem
  );
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
