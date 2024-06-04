import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { BREAKPOINTS } from "../../constants";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileBreadcrumbs>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
              </Breadcrumbs.Crumb>
            </Breadcrumbs>
          </MobileBreadcrumbs>
          <Title>Running</Title>
          <PhonesExcluded>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </PhonesExcluded>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const PhonesExcluded = styled.div`
  @media (max-width: ${BREAKPOINTS.phoneMax}px) {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    flex: 1 1 100%;
    display: inherit;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (max-width: ${BREAKPOINTS.tabletMax}px) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
