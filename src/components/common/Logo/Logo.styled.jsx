import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[4] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

const Text = styled.span`
  display: flex;

  font-family: ${({ theme }) => theme.fonts.secondary.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-family: ${({ theme }) => theme.fonts.secondary.bold};
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;

export { Wrapper, Text };
