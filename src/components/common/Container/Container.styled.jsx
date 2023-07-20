import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ theme }) => theme.breakpoints.mobile};
  height: 100%;
  padding: 0
    ${({ theme, authPage }) => (authPage ? 0 : theme.space[2] * 5 + 'px')};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.breakpoints.tablet};
    padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 0 ${({ theme }) => theme.space[4] + 'px'};
  }
`;

export { Wrapper };
