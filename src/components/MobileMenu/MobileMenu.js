/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <UnstyledButton onClick={onDismiss}>
        <Icon id="close" strokeWidth={2} size={24} />
      </UnstyledButton>
      <nav>
        <HighlightedLink href="/sale">Sale</HighlightedLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </nav>
      <footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </Wrapper>
  );
};

const HighlightedLink = styled.a`
  color: ${COLORS.secondary};
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: white;
  min-width: 300px;
  padding: 32px;

  button:first-child {
    position: absolute;
    top: 26px;
    right: 16px;
  }

  nav {
    height: 100%;
    display: flex;
    gap: ${12 / 16}rem;
    flex-direction: column;
    justify-content: center;

    a {
      font-weight: ${WEIGHTS.medium};
      text-decoration: none;
      text-transform: uppercase;
      font-size: ${18 / 16}rem;
    }
  }

  footer {
    position: absolute;
    bottom: 32px;
    left: 32px;

    a {
      display: block;
      color: ${COLORS.gray[700]};
      text-decoration: none;
      font-size: ${14 / 16}rem;
      line-height: 2;

      &:hover {
        text-decoration: revert;
      }
    }
  }
`;

export default MobileMenu;
