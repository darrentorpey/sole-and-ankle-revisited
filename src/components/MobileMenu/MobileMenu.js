/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="modal-content">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} size={24} />
        </CloseButton>

        <Nav>
          <HighlightedLink href="/sale">Sale</HighlightedLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay >
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);

  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${12 / 16}rem;
  flex-direction: column;
  justify-content: center;
  padding: 32px;

  a {
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  left: 32px;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    display: block;
    color: var(--color-gray-700);
    text-decoration: none;
    font-size: ${14 / 16}rem;
    line-height: 2;

    &:hover {
      text-decoration: revert;
    }
  }
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HighlightedLink = styled.a`
  color: var(--color-secondary);
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
`;

export default MobileMenu;
