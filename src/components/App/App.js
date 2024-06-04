import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { BREAKPOINTS, COLORS } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <Wrapper>
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  --color-gray-900: ${COLORS.gray[900]};
  --color-gray-900: ${COLORS.gray[900]};
`;

const Main = styled.main`
  padding: 64px 32px;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    padding: 48px 32px;
  }
`;

export default App;
