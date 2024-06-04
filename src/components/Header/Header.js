import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import { BREAKPOINTS } from '../../breakpoints';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

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
            </UnstyledButton>

            <IconHolder>
              <Icon id="search" strokeWidth={2} size={24} />
            </IconHolder>

            <UnstyledButton>
              <Icon id="menu" strokeWidth={2} size={24} />
            </UnstyledButton>
          </MobileHolder>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};



const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: ${BREAKPOINTS.laptopMax}px) {
    justify-content: space-between;
  }
`;

const IconHolder = styled.div`
  position: relative;
`;

const MobileHolder = styled.div`
  display: flex;
  gap: clamp(1rem, calc(8vw - 1rem), 3rem);
  justify-content: right;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.laptopMax}px) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: ${BREAKPOINTS.laptopMax}px) {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
